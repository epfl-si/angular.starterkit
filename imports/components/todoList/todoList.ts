import { Component } from '@angular/core'

export interface Task {
  checked: boolean
  text: string
}

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.html'
})
export class TodoList {
  tasks : Task[] = [
      { checked: false, text: "Rapport hebdo" },
      { checked: true, text: "To-do list en Angular" }
  ]

  toggleChecked (task : Task) {
    task.checked = ! task.checked
    console.log(task.checked ? "✓" : "✗")
  }

  removeTask (task : Task) {
    this.tasks = this.tasks.filter((t) => ! (t === task))
  }
  addTaskAndClearInput (input : HTMLInputElement) {
    const text : string = input.value
    input.value = ""

    const tasks = this.tasks.slice(0)
    tasks.push({checked: false, text})
    this.tasks = tasks
  }
}
