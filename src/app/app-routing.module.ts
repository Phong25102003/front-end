import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './client/pages/login/login.component';
import { RegisterComponent } from './client/pages/register/register.component';
import { ClientLayoutComponent } from './client/layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { ProductDetailComponent } from './client/pages/productDetail/product-detail/product-detail.component';
import { ProductComponent } from './admin/pages/product/product/product.component';
import { NotFoundComponent } from './client/pages/notFound/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
