import { Component, OnInit } from '@angular/core';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // let output = document.getElementById("calendar");
  thisDay: String;
  arrMonthRu = {0: "Январь", 1: "Февраль", 2: "Март", 3: "Апрель", 4: "Май", 5: "Июнь", 6: "Июль", 7: "Август", 8: "Сентябрь", 9: "Октябрь", 10: "Ноябрь", 11: "Декабрь"};
  now = new Date();
  yearNow: number = this.now.getFullYear();
  monthNow: number = this.now.getMonth();
  dateNow: number = this.now.getDate();
  firstDayWeekInMonth: number;  // день  недели с которого начинается месяц
  inner: string;
  daysInMonth: number;    // дней в месяце
  weekStop = 0;

  arrDate = [];   // Массив всех дней месяца
  i: number = 0;
  tt: string = '';

  weekEnd = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41];   // Массив выходных

  // Получение массива дней в месяце
  arrD() {
    this.arrDate = [];
    this.firstDayWeekInMonth = new Date(this.yearNow, this.monthNow, 1, 15).getDay();
    (this.firstDayWeekInMonth === 0) ? this.firstDayWeekInMonth = 7 : '';
    this.daysInMonth = 32 - new Date(this.yearNow, this.monthNow, 32).getDate();

    // Массив всех дней, анализ выходных, дня начала месяца
    for (this.i = 0; this.i < ((this.daysInMonth >= 30 && this.firstDayWeekInMonth >= 7) || (this.daysInMonth >= 31 && this.firstDayWeekInMonth >= 6) ? 42 : 35); this.i++) {
      this.arrDate.push ({"day" : this.i, "dayW": this.i + 2- this.firstDayWeekInMonth, "holiday": (this.weekEnd.indexOf(this.i) < 0) ? false : true});
    }
    // console.log(this.arrDate);
    return this.arrDate;
  }

  lessYear() {
    this.yearNow--;
    this.arrD();
  }

  lessMonth() {
    if (this.monthNow > 0) {
      this.monthNow -= 1;
   } else {
      this.monthNow = 11;
      this.yearNow -= 1;
   }
   this.arrD();
  }

  moreMonth() {
    if(this.monthNow < 11) {
      this.monthNow += 1;
   } else {
    this.monthNow = 0;
    this.yearNow += 1;
   }
   this.arrD();
  }

  moreYear() {
    this.yearNow++;
    this.arrD();
  }
  constructor() { }

  ngOnInit() {
    this.arrD();
    // console.log("firstDayWeekInMonth" + this.firstDayWeekInMonth);
    // console.log("this.yearNow" + this.yearNow);
    // console.log("this.firstDayWeekInMonth " + this.firstDayWeekInMonth);
  }

}
