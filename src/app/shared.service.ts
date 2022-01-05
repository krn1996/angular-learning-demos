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
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDEyOTQyMjYsInVzZXJJZCI6IjVkYTE4ODQ2LTNjMmItNGY0MC1hOTg5LWJhYzY2ODYyZDllNiIsImVtYWlsIjoibml0aW4ua3VtYXJAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI4ODAyNjk5MTAwIiwib3JnSWQiOiJjMjRmN2M5MS0zMGJhLTQ1MzMtYjg2ZC05ZWNhNjQ0ZTY2MDUiLCJuYW1lIjoiTml0aW4gS3VtYXIiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6ZmFsc2UsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.jJxqt3o8MQ6nav4b8RwvuMJkjH1bqtBeJRno_BX4fPY",
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
