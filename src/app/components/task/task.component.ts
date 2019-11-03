import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;
  @Output() done = new EventEmitter<Task>();

  constructor() {
  }

  markAsDone(task: Task) {
    if (task) {
      task.isDone = true;
      this.done.emit(task);
    }
  }
}
