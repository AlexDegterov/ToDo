import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  public arrMonthRu: string[];    // массив русских месяцев
  private nowTime: any;           // текущее время (new Date())
  public year: number;           // номер года в календаре
  public month: number;          // номер месяца в календаре
  public day: number;             // номер дня в календаре
  private firstDayWeekInMonth: number; // день  недели с которого начинается выбранный месяц
  public daysInMonth: number;     // всего дней в выбранном месяце

  public yearNow: number;        // номер текущего года
  public monthNow: number;       // номер текущего месяца
  public dayNow: number;         // номер текущего дня

  public arrDate = [];            // массив всех дней месяца для вывода на странице
  private i: number;
  private arrHighlightClick;
  private dayTemp: number;

  private weekEnd = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41];   // массив выходных


  // Получение массива дней в месяце
  arrD() {
    this.arrDate = [];
    this.firstDayWeekInMonth = new Date(this.year, this.month, 1, 15).getDay();
    if (this.firstDayWeekInMonth === 0) { this.firstDayWeekInMonth = 7; }
    this.daysInMonth = 32 - new Date(this.year, this.month, 32).getDate();

    // Массив всех дней, анализ выходных, дня начала месяца
// tslint:disable-next-line: max-line-length
    for (this.i = 0; this.i < ((this.daysInMonth >= 30 && this.firstDayWeekInMonth >= 7) || (this.daysInMonth >= 31 && this.firstDayWeekInMonth >= 6) ? 42 : 35); this.i++) {
      this.dayTemp = this.i + 2 - this.firstDayWeekInMonth;
      if (this.dayTemp < 1 || this.dayTemp > this.daysInMonth) { this.dayTemp = 0; }
// tslint:disable-next-line: max-line-length
      this.arrDate.push ({day: this.i, dayW: this.dayTemp, holiday: (this.weekEnd.indexOf(this.i) < 0) ? false : true, today: ((this.i + 2 - this.firstDayWeekInMonth === this.day) && this.yearNow === this.year && this.monthNow === this.month) ? true : false});
    }
    return this.arrDate;
  }

  lessYear() {
    this.year--;
    this.arrD();
  }

  lessMonth() {
    if (this.month > 0) {
      this.month -= 1;
   } else {
      this.month = 11;
      this.year -= 1;
   }
    this.arrD();
  }

  moreMonth() {
    if (this.month < 11) {
      this.month += 1;
   } else {
    this.month = 0;
    this.year += 1;
   }
    this.arrD();
  }

  moreYear() {
    this.year++;
    this.arrD();
  }

  constructor() {}

  ngOnInit() {
    this.arrMonthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    this.nowTime = new Date();
    this.year = this.nowTime.getFullYear();
    this.month = this.nowTime.getMonth();
    this.day = this.nowTime.getDate();

    this.yearNow = this.year;         // сохраняем текущий год
    this.monthNow = this.month;       // сохраняем текущий месяц
    this.dayNow = this.day;           // сохраняем текущий день

    this.arrD();
  }

  selectDay(ev) {
    if (ev.target.dataset.date < 1) { return; }

    this.arrHighlightClick = document.getElementsByClassName('highlightClick');
    if (this.arrHighlightClick.length > 0) {
      this.arrHighlightClick[0].classList.remove('highlightClick');
    }

    this.day = null;
    if (ev.target.innerText) {
      if (ev.target.tagName !== 'DIV') {
        this.day = ev.target.parentNode.dataset.date;
        ev.target.parentNode.classList.add('highlightClick');
      } else {
        this.day = ev.target.dataset.date;
        ev.target.classList.add('highlightClick');
      }
    }
  }
}
