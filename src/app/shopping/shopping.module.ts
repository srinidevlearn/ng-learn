import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping.routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TempDashComponent } from './components/temp-dash/temp-dash.component';
import { ProductInventoryFormsComponent } from './components/product-inventory-forms/product-inventory-forms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductTableComponent } from './components/product-table/product-table.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TempDashComponent,
    ProductInventoryFormsComponent,
    InventoryComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
