import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost/8080/users'
  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<any>{
    return this.http.post(this.baseUrl, user)
  }
}
