import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBooksComponent } from './list-books/list-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: 'list-books', component: ListBooksComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'edit-book/:id', component: EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
