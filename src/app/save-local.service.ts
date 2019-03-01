import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

let dataItems: any;

export class SaveLocalService {
  // Запись в Local Storage
  private storeToLocal(content: object) {
    localStorage.setItem('ToDoList', JSON.stringify(content));
    return true;
  }

  // Чтение из Local Storage
  private retrieveFromLocal() {
    dataItems = localStorage.getItem('ToDoList');
    return JSON.parse(dataItems);
  }


  constructor() { }
}
