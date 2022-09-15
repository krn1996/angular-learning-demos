import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private type$ :BehaviorSubject<any> = new BehaviorSubject<any>({});
  private a : Observable<any>
  constructor(private http: HttpClient) {}

  getData(){
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get(url);
  }

  async getB() {
      const url = 'https://reqres.in/api/users?page=2';
      console.log(await this.http.get(url));

      return this.http.get(url)
    }
}
