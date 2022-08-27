import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: 'to-do', component: TodoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'content-projection', component: ContentProjectionComponent,children:[
    { path: 'to-do', component: TodoComponent },
    { path: 'profile', component: ProfileComponent },
    {
      path: 'shopping',
      loadChildren: () =>
        import('./shopping/shopping.module').then((m) => m.ShoppingModule),
    },
    { path: 'content-projection', component: ContentProjectionComponent}
  ]},
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  },
];

export const routeLabel = routes.map((i) => i.path);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
