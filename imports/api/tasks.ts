import { Mongo } from "meteor/mongo"

export interface Task {
  _id ?: string
  checked: boolean
  text: string
}

export const Tasks = new Mongo.Collection<Task>('tasks')
