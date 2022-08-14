import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDescComponent } from './components/product-desc/product-desc.component';
import { ProductInventoryFormsComponent } from './components/product-inventory-forms/product-inventory-forms.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RegisterComponent } from './components/register/register.component';
import { TempDashComponent } from './components/temp-dash/temp-dash.component';
import { InventoryAccessGaurd } from './services/inventory-access-gaurd.guard';
import { ProductDescResolver } from './services/product-desc.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },


  { path: 'dashboard', component: TempDashComponent },
  { path: 'product-description/:id', component: ProductDescComponent,  resolve:{ product_desc: ProductDescResolver } },
  {
    path: 'product_inventory',
    component: InventoryComponent,
    canActivate:[InventoryAccessGaurd],
    children: [
      { path: 'form', component: ProductInventoryFormsComponent },
      { path: 'view', component: ProductTableComponent },
      { path: 'form/:id', component: ProductInventoryFormsComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
