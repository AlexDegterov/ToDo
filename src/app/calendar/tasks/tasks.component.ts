import { OnInit, Input, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() year: number;
  @Input() month: number;
  @Input() day: number;

  public tasks = [];
  private timeAddTask: number;
  public arrTasks = [];
  public tasksFromLocal: any;
  public arrMonthRu: string[];    // массив русских месяцев
  private dateTXT: string;

  constructor(public sls: DataService) {}

  public form: FormGroup = new FormGroup( {
    task: new FormControl()
  });

  submit() {
    if (!this.form.value.task) { return; }
    
    this.dateTXT = this.year + '-' + this.month + '-' + this.day;
    this.timeAddTask = new Date().getTime();
    this.tasks.push({tt: this.timeAddTask, t: this.form.value.task, a: 'yes'});
    this.form.reset();    // очищаем форму
    this.saveLocal();     // сохраняем добавленную задачу
  }

  // Сохранение в Local Storage
  saveLocal() {
    this.sls.storeToLocal(this.tasks);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveLocal();
  }

  // Массив задач для вывода
  viewSaved() {
    return this.tasks;
  }

  ngOnInit() {
    this.tasksFromLocal = JSON.parse(this.sls.retrieveFromLocal());
    if (!this.tasksFromLocal) { return; }
    this.arrTasks = this.tasksFromLocal;
    this.arrTasks.forEach((V) => {
      this.tasks.push(V);
    });
    this.arrMonthRu = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  }

}
