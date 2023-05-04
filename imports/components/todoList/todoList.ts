import { MongoObservable, zoneOperator } from 'meteor-rxjs'
import { Component } from '@angular/core'
import { Task, Tasks } from '../../api/tasks'

const TasksObservable = new MongoObservable.Collection<Task>(Tasks as any)

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.html'
})
export class TodoList {
  tasks = TasksObservable.find({}).pipe(zoneOperator())

  toggleChecked (task : Task) {
    Tasks.update(task._id, { $set: { checked: ! task.checked }})
  }

  removeTask (task : Task) {
    Tasks.remove(task._id)
  }
  addTaskAndClearInput (input : HTMLInputElement) {
    const text : string = input.value
    input.value = ""

    Tasks.insert({text, checked: false})
  }
}
