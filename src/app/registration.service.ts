import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

  constructor(private http: HttpClient) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  userRegistration(user: User) {
    return this.http.post('http://127.0.0.1:8000/api/user-registration', user);
  }

}
