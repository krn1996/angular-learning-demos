import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {

  async sayHello() {
    console.log('WebWorkerService called');

    if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
  }


  async countApple(counter: number, 
    updateCounter: (value: number) => void) {
if (typeof Worker !== 'undefined') {
const worker = 
new Worker('../workers/hello.worker', { type: 'module' });

worker.onmessage = ({ data }) => {
updateCounter(data);
};

worker.postMessage(counter);
}
}
}
