import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http: HttpClient) { }

  getData1(){
    const url = 'https://reqres.in/api/users?page=1&per_page=10';
    return this.http.get(url);
  }
  getData2(){
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get(url);
  }
  print(val,containerId){
    let el = document.createElement('li');
    el.innerHTML = val
    document.getElementById(containerId).appendChild(el)
  }

  clearList(containerId){
    document.getElementById(containerId).innerHTML = ''
  }
}
