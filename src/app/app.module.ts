import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginComponent } from './client/pages/login/login.component';
import { RegisterComponent } from './client/pages/register/register.component';
import { ClientLayoutComponent } from './client/layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { HeaderClientComponent } from './client/components/headerClient/header-client/header-client.component';
import { FooterClientComponent } from './client/components/footerClient/footer-client/footer-client.component';
import { FooterAdminComponent } from './admin/components/footerAdmin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './admin/components/headerAdmin/header-admin/header-admin.component';
import { ProductDetailComponent } from './client/pages/productDetail/product-detail/product-detail.component';
import { ProductComponent } from './admin/pages/product/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './client/pages/notFound/not-found/not-found.component';
import { ToastComponent } from './components/toast/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { SidebarComponent } from './admin/components/sidebar/sidebar/sidebar.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HeaderClientComponent,
    FooterClientComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    ProductDetailComponent,
    ProductComponent,
    NotFoundComponent,
    ToastComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
  ],
  providers: [MessageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
