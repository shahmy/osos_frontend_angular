import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    registrationForm!: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private getRegistrationService: RegistrationService,
    private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.registrationForm = this.formBuilder.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirm_password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  userRegistrtion() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
  }

    this.getRegistrationService.
    userRegistration(this.registrationForm.value)
    .pipe(first())
    .subscribe({
      next: (user: any) => {
        console.log(user);
      },
      error: error => {
        console.log(error);
      }
    });

  }

}
