import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product/product.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listProduct: Product[] = [];
  search = new FormControl('');

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productService.getAll().subscribe((res: any) => {
      this.listProduct = res.data.docs;
    });
  }
  onSearch(): void {
    this.productService
      .getAll({ _search: this.search.value || '' })
      .subscribe((res: any) => {
        this.listProduct = res.data.docs;
        console.log(this.listProduct);
      });
  }
}
