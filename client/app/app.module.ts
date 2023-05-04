import { NgModule, ErrorHandler } from '@angular/core'
import { MyApp } from '../../imports/components/myApp'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    MyApp
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
