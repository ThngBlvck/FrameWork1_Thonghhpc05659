import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { StarComponent } from './pages/star/star.component';
import { FormsModule } from '@angular/forms';
import {DialogComponent} from './pages/product/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
