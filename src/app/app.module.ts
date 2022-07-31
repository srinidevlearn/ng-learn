import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService } from './service/api.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, TodoComponent, LoginComponent, ProductCardComponent,ProfileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
