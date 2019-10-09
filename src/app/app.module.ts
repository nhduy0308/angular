import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { NavbarComponent } from './components/Master/navbar/navbar.component';
import { SliderComponent } from './components/Master/slider/slider.component';
import { BannerComponent } from './components/Master/banner/banner.component';
import { FooterComponent } from './components/Master/footer/footer.component';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';
import { Page404Component } from './page/page404/page404.component';
import { RightBarComponent } from './components/Master/right-bar/right-bar.component';
import { BlogListComponent } from './page/blog-list/blog-list.component';
import { AuthMasterLayoutComponent } from './layouts/auth-master-layout/auth-master-layout.component';
import { SignInComponent } from './page/master/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MasterLayoutComponent,
    NavbarComponent,
    SliderComponent,
    BannerComponent,
    FooterComponent,
    BlogDetailComponent,
    Page404Component,
    BlogListComponent,
    RightBarComponent,
    AuthMasterLayoutComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
