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
import { ProductDescComponent } from './components/product-desc/product-desc.component';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { InventoryAccessGaurd } from './services/inventory-access-gaurd.guard';
import { ProductDescResolver } from './services/product-desc.resolver';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { TotalPipe } from './total.pipe';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TempDashComponent,
    ProductInventoryFormsComponent,
    InventoryComponent,
    ProductTableComponent,
    ProductCardComponent,
    ProductDescComponent,
    MenuComponent,
    CartComponent,
    TotalPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingRoutingModule,
    HotToastModule.forRoot() 
  ],
  providers:[HotToastService,InventoryAccessGaurd,ProductDescResolver]
})
export class ShoppingModule { }
