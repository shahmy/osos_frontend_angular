import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../../../_services';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addAuthorBook!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
    this.addAuthorBook = this.formBuilder.group({
        isbn: ['', Validators.required],
        title: ['', Validators.required],
        description: [''],
        price: [''],
        cover_image: ['']
      });
  }

  get f() { return this.addAuthorBook.controls; }


  addBook() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.addAuthorBook.invalid) {
      return;
  }

   /*  this.cover_image = this.f['cover_image'].value; */

    /* .append('cover_image', this.uploadedImage, this.uploadedImage.name); */

    /* console.log(this.cover_image); */

    const formData = new FormData();
    formData.append('isbn', this.f['isbn'].value);
    formData.append('title', this.f['title'].value);
    formData.append('description', this.f['description'].value);
    formData.append('price', this.f['price'].value);
    formData.append('cover_image', this.f['cover_image'].value);

    this.loading = true;
    this.accountService.
    createAutherBook('14',formData)
    .pipe(first())
      .subscribe({
          next: () => {
            this.alertService.success('New book added!', { keepAfterRouteChange: true });
            this.router.navigate(['../list-books'], { relativeTo: this.route });
          },
          error: error => {
            console.log(error);
          }
      });

  }

}
