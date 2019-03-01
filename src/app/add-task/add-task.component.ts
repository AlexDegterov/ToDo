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
  private rezSave: boolean;
  public arrTasks = [];

  constructor(private sls: SaveLocalService) {}

  public form: FormGroup = new FormGroup( {
    task: new FormControl()
  });

  submit() {
    if(!this.form.value.task) return;
    this.timeAddTask = new Date().getTime();
    this.tasks.push({'tt': this.timeAddTask, 't': this.form.value.task, 'a': 'yes'});
    this.form.reset();    // очищаем форму
    this.saveLocal();     // сохраняем добавленную задачу
  }

  // Сохранение локально
  saveLocal() {
    this.sls.storeToLocal(JSON.stringify(this.tasks));
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
    this.arrTasks = JSON.parse(this.sls.retrieveFromLocal());
    this.arrTasks.forEach((V) => {
      this.tasks.push(V);
    })
  }

}
