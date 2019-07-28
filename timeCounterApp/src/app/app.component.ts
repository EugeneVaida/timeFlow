import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : string = '';
  dates = { start: '', end: '' };
  title = 'timeCounterApp';

  calculate(){
    console.log(this.dates);
    let end = new Date(this.dates.end); // some mock date
    let millisecondsEnd : number= end.getTime(); 
    let start = new Date(this.dates.start); // some mock date
    let millisecondsStart : number = start.getTime();
    let hours : string = ((millisecondsEnd - millisecondsStart) / 1000 / 60 / 60).toFixed(2);
    this.result = `Your time is ${hours}`;
  }

}
