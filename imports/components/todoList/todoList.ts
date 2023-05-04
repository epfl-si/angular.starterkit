import { Observable } from 'rxjs'
import { MongoObservable, zoneOperator } from 'meteor-rxjs'
import { Component } from '@angular/core'

const Tasks = new MongoObservable.Collection<Task>('tasks');

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.html'
})
export class TodoList {
  tasks = Tasks.find({}).pipe(zoneOperator())

  toggleChecked (task : Task) {
    // TODO
  }

  removeTask (task : Task) {
    // TODO
  }
  addTaskAndClearInput (input : HTMLInputElement) {
    const text : string = input.value
    input.value = ""

    // TODO
  }
}
