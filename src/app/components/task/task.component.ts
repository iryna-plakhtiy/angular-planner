import {
  Component,
} from '@angular/core';

import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  task: Task;
  //done = new EventEmitter<Task>();

  constructor() {
  }

  markAsDone(task: Task) {
    if (task) {
      task.isDone = true;
    }
  }
}
