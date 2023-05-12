import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(first_name: string, last_name:string, email: string, password: string) {
    const body = {
      first_name,
      last_name,
      email,
      password
    };
    return this.http.post('http://127.0.0.1:8000/api/user-registration', body);
  }

}
