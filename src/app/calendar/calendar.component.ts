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

  weekEnd = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34];
  // Получение массива дней в месяце
  arrD() {
    for (this.i = 0; this.i < 35; this.i++) {
      this.arrDate.push ({"day" : this.i, "dayW": this.i +2- this.firstDayWeekInMonth, "holiday": (this.weekEnd.indexOf(this.i) < 0) ? false : true});
    }
    //console.log(this.arrDate);
    return this.arrDate;
  }

  lessYear() {
    this.yearNow--;
  }

  lessMonth() {
    if (this.monthNow > 0) {
      this.monthNow -= 1;
   } else {
      this.monthNow = 11;
      this.yearNow -= 1;
   }
  }

  moreMonth() {
    if(this.monthNow < 11) {
      this.monthNow += 1;
   } else {
    this.monthNow = 0;
    this.yearNow += 1;
   }
  }

  moreYear() {
    this.yearNow++;
  }
  constructor() { }

  ngOnInit() {
    //  console.log(this.yearNow + "-" + this.monthNow + "-" + this.dateNow);
    this.daysInMonth = 32 - new Date(this.yearNow, this.monthNow, 32).getDate();

    this.firstDayWeekInMonth = new Date(this.yearNow, this.monthNow, 1, 15).getDay();

    (this.firstDayWeekInMonth === 0) ? this.firstDayWeekInMonth = 7 : '';

    this.arrD();
    // console.log("firstDayWeekInMonth" + this.firstDayWeekInMonth);
    // console.log("this.yearNow" + this.yearNow);
    // console.log("this.firstDayWeekInMonth " + this.firstDayWeekInMonth);










    // for (w = 0; w < 6 && !weekStop; w++) {
    //    inner += "<div class='week'>";

    //    for (i = 0; i <= 6; i++) {
    //       let holiday = "";

    //       (i === day - 1 && w === 0) ? thisDay++ : "";             // Старт вывода даты
    //       (i === 5 || i === 6) ? holiday = " holiday" : "";
    //       inner += "<div class='day" + holiday + "'><span>" + thisDay + "</span></div>";
    //       thisDay === daysInMonth ? weekStop = 1 : "";           // Останавливаем цикл, что бы не было лишних недель

    //       (thisDay > 0 && thisDay < daysInMonth) ? thisDay++ : thisDay = "";
    //    }

    //    inner += "</div>";
    // }

    // output.innerHTML = inner;

    // document.getElementById("date").innerHTML = "<button onclick='lessYear()'> << </button> <button onclick='lessMonth()'> < </button><div class='dDate'>" + arrMonthRu[monthUser] + " " + yearUser + " года</div>" + "<button onclick='moreMonth()'> > </button> <button onclick='moreYear()'> >> </button>";

  }

}
