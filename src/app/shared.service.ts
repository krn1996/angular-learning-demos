import { Injectable } from '@angular/core';
import {  forkJoin, of, EMPTY, Subject, Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { catchError, map, pluck, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  headers: any;
  public callService(
    methodType: string,
    body: any = null,
    path: string
  ): Observable<any> {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDAxNTc2NjYsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZWNlOGRjZWUtZjk0Mi00ZjE2LWFmM2EtMTg2ZmQwOTc3YjBkIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.X2fwsbUmLm2HKTr1JpX8SOuTVu5etv3NPZ0J_0XVBog",
    });

    if (methodType === "get") {
      return this.httpClient.get(path, { headers: this.headers });
    }

    if (methodType === "post") {
      return this.httpClient.post(path, body, { headers: this.headers });
    }

    if (methodType === "put") {
      return this.httpClient.put(path, body, { headers: this.headers });
    }

    if (methodType === "delete") {
      return this.httpClient.delete(path, { headers: this.headers });
    }   else {
      return this.headers
    }
  } 

  
}
