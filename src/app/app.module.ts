import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
