import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './product/add/add.component';
import { EditComponent } from './product/edit/edit.component';
import { AuthGurdGuard } from './auth/auth-gurd.guard';
import { AuthGurd2Guard } from './auth/auth-gurd2.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGurdGuard , AuthGurd2Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
