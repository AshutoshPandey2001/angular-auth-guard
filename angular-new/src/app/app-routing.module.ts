import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGurdGuard } from './auth/auth-gurd.guard';
import { AuthGurd2Guard } from './auth/auth-gurd2.guard';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './product/add/add.component';
import { EditComponent } from './product/edit/edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent, canActivate:[AuthGurdGuard], canActivateChild : [AuthGurd2Guard], 

    children: [
      {  path: 'add', component: AddComponent  },
      {  path: 'edit', component: EditComponent  }
      ]  

  },
  {
    path:'about',
    component:AboutComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
