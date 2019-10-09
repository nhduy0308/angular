import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';
import { BlogListComponent } from './page/blog-list/blog-list.component';
import { AuthMasterLayoutComponent } from './layouts/auth-master-layout/auth-master-layout.component';
import { SignInComponent } from './page/master/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: 'detail/:id',
        component: BlogDetailComponent
      }
    ]
  },
  {
    path: 'Auth',
    component: AuthMasterLayoutComponent,
    children: [
      {
        path : 'SignIn',
        component: SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
