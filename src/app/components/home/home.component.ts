import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { AccountService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books?:any[];
  search?: any;
  name?: any;

  constructor(private accountService: AccountService) {}

  ngOnInit() {

    this.search = new FormControl(''); 
    console.log(this.search.value);

    this.listAllBooks();
  }

  searchBooks() {
   
    this.listAllBooks();

  }

  listAllBooks(){

    this.accountService.getAllBooks(this.search.value)
    .pipe(map(response => ({
            ...response,
        })))
         .subscribe(response => {
          this.books = response.books;
        }); 
  }

}
