import { Component, OnInit } from '@angular/core';
import { WebWorkerService } from '../web-worker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countTomato = 0;
  countApple = 0;

  constructor(private _worker: WebWorkerService) { }

 async ngOnInit() {   
   await this._worker.sayHello();
  }

  incTomato() {
    this.countTomato++;
  }

  // incApple() {
  //   const start = Date.now();
  //   while (Date.now() < start + 5000) {
  //   }
  //   this.countApple++;
  // }

  async incApple() {
    await this._worker.countApple(this.countApple, 
               (value: number) => this.countApple = value);
  }

}
