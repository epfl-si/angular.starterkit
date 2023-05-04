import { NgModule, ErrorHandler } from '@angular/core'
import { MyApp } from '../../imports/components/myApp/myApp'
import { TodoList } from '../../imports/components/todoList/todoList'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    MyApp,
    TodoList
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: ErrorHandler }
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    MyApp
  ]
})

export class AppModule {}
