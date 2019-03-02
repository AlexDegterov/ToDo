import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  private arrMonthRu: string[];
  private now: any;
  private yearNow: number;
  private monthNow: number;
  private dateNow: number;
  private firstDayWeekInMonth: number; // день  недели с которого начинается месяц
  private daysInMonth: number;    // дней в месяце

  private arrDate = [];   // Массив всех дней месяца
  private i: number;
  private tt: string;

  weekEnd = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41];   // Массив выходных

  // Получение массива дней в месяце
  arrD() {
    this.arrDate = [];
    this.firstDayWeekInMonth = new Date(this.yearNow, this.monthNow, 1, 15).getDay();
    if (this.firstDayWeekInMonth === 0) { this.firstDayWeekInMonth = 7; }
    this.daysInMonth = 32 - new Date(this.yearNow, this.monthNow, 32).getDate();

    // Массив всех дней, анализ выходных, дня начала месяца
// tslint:disable-next-line: max-line-length
    for (this.i = 0; this.i < ((this.daysInMonth >= 30 && this.firstDayWeekInMonth >= 7) || (this.daysInMonth >= 31 && this.firstDayWeekInMonth >= 6) ? 42 : 35); this.i++) {
// tslint:disable-next-line: max-line-length
      this.arrDate.push ({day: this.i, dayW: this.i + 2 - this.firstDayWeekInMonth, holiday: (this.weekEnd.indexOf(this.i) < 0) ? false : true});
    }
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
    if (this.monthNow < 11) {
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
    this.arrMonthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    this.now = new Date();
    this.yearNow = this.now.getFullYear();
    this.monthNow = this.now.getMonth();
    this.dateNow = this.now.getDate();

    this.arrD();
  }
}
