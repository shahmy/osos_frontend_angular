import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { AccountService } from '../../../_services';
import { User} from '../../../_models';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books?:any[];
  authorId?: any;

  
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    ) {
      this.accountService.user
      .pipe(map(userDetails => ({
              ...userDetails,
      })))
      .subscribe(userDetails => this.authorId = userDetails.user.author.id);
    }

  ngOnInit() {

    this.listAuthorBooks();

  }

  listAuthorBooks(){

    this.accountService.getAuthorBooks(this.authorId)
    .pipe(map(response => ({
            ...response,
        })))
         .subscribe(response => {
          this.books = response.books;
        }); 
  }

}
