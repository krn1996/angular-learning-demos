import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  message: string = '';
   greetMessage: string = '';
  @Output() sendMessageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  greet(): void {
    this.sendMessageEvent.emit('Hello From Greet Component');

  }

}

