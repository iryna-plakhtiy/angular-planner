import { Component } from '@angular/core';

import { Task } from '../interfaces';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  tasks: Task[] = [
    {
      description: 'Buy groceries',
      priority: 'low',
      isDone: false
    },
    {
      description: 'Call mom',
      priority: 'high',
      isDone: true
    },
    {
      description: 'Book a hotel room',
      priority: 'high',
      isDone: false
    },
    {
      description: 'Finish homework',
      priority: 'low',
      isDone: false
    }
  ];

  constructor() {
  }

  showMessage(task: Task) {
    console.log(`${task.description} is done. GOOD JOB!`);
  }
}
