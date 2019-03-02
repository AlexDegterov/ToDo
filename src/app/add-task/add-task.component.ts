import { Component, OnInit } from '@angular/core';
import { SaveLocalService } from '../save-local.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public tasks = [];
  private timeAddTask: number;
  public arrTasks = [];
  public tasksFromLocal: any;

  constructor(public sls: SaveLocalService) {}

  public form: FormGroup = new FormGroup( {
    task: new FormControl()
  });

  submit() {
    if (!this.form.value.task) { return; }
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
  }

}
