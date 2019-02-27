import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // let output = document.getElementById("calendar");
  thisDay : String = "";
  arrMonthRu = [{0: "Январь", 1: "Февраль", 2: "Март", 3: "Апрель", 4: "Май", 5: "Июнь", 6: "Июль", 7: "Август", 8: "Сентябрь", 9: "Октябрь", 10: "Ноябрь", 11: "Декабрь"}];
  now = new Date();
  yearNow: number = this.now.getFullYear();
  monthNow: number = this.now.getMonth();
  dateNow: number = this.now.getDate();
  firstDayWeekInMonth: number = new Date(this.yearNow, this.monthNow, 1, 15).getDay();
  inner: string = "";
  daysInMonth: number;
  weekStop: number = 0;

  constructor() { }

  ngOnInit() {
    //  console.log(this.yearNow + "-" + this.monthNow + "-" + this.dateNow);
    this.daysInMonth = 32 - new Date(this.yearNow, this.monthNow, 32).getDate();
    (this.firstDayWeekInMonth === 0) ? this.firstDayWeekInMonth = 7 : "";

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
