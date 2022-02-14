import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public sitename;

    constructor(private router: Router) {
      }
    ngOnInit() {
        this.sitename = environment.siteName;
    }

    secondApp() {
     this.router.navigateByUrl("http://localhost:4001/en/");
    }
}
