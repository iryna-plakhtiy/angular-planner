import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
