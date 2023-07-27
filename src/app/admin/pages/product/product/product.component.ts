import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  listProduct: Product[] = [];
  listCategory: Category[] = [];
  editProduct: Product = {} as Product;
  visible = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }
  getAllProduct() {
    this.productService.getAll().subscribe((res: any) => {
      this.listProduct = res.data.docs;
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe((res: any) => {
      this.listCategory = res.data;
    });
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    this.editProduct = {} as Product;
  }

  getEditProduct(_id: string) {
    this.editProduct = this.listProduct.filter(
      (product) => product._id === _id
    )[0];
    this.visible = true;
  }

  deleteProduct(_id: string) {
    this.productService.delete(_id).subscribe((res: any) => {
      this.listProduct = this.listProduct.filter(
        (product) => product._id !== _id
      );
    });
  }

  onSubmit(myForm: NgForm) {
    const data = {
      ...myForm.value,
      price: Number(myForm.value.price),
    };
    if (this.editProduct._id) {
      console.log(myForm.value);
      this.productService.update(this.editProduct._id, data).subscribe(
        (res: any) => {
          const index = this.listProduct.findIndex(
            (product) => product._id === this.editProduct._id
          );
          this.listProduct[index] = res.data;
          this.visible = false;
          myForm.reset();
        },
        (err) => {
          console.log(err);
        }
      );
      return;
    } else {
      this.productService.create(data).subscribe((res: any) => {
        this.listProduct.push(res.data);
        this.visible = false;
        myForm.reset();
      });
    }
  }
}
