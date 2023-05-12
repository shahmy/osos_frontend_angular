import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl('')
  });

  first_name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(private getRegistrationService: RegistrationService) {
  }

  userRegistrtion() {

    console.log(this.registrationForm.value);

    this.getRegistrationService.
    userRegistration(this.first_name, this.last_name, this.email, this.password, this.confirm_password)
    .subscribe((user: any) => {

      if (user) {
        alert('Registration Successful');
      }

    });

  }

}
