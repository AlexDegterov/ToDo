let dataItems: any;
let toJSON: string;

export class SaveLocalService {

  // Запись в Local Storage
  public storeToLocal(content: object) {
    toJSON = JSON.stringify(content);
    toJSON = JSON.stringify(toJSON);
    localStorage.setItem('ToDoList', toJSON);
    return true;
  }

  // Чтение из Local Storage
  public retrieveFromLocal() {
    dataItems = localStorage.getItem('ToDoList');
    return JSON.parse(dataItems);
  }


  constructor() { }
}
