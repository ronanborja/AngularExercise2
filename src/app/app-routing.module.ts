import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },

  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'book/form',
    component: BookFormComponent
  },
  {
    path: "blog/form",
    component: BlogFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
