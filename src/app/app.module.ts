import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService } from './service/api.service';
import { CommonModule } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';
import { SortTodoPipe } from './pipe/sort-todo.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TokenInterceptor } from './service/token.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ContentProjectionDemoComponent } from './components/content-projection-demo/content-projection-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    
    ProfileComponent,
    SortTodoPipe,
    TodoListComponent,
    ContentProjectionComponent,
    ContentProjectionDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,multi:true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
