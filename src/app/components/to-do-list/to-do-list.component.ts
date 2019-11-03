import { Component } from '@angular/core';

interface Task {
  description: string;
  priority: 'low' | 'high';
  isDone: boolean;
}

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

  markAsDone(task: Task) {
    if (task) {
      task.isDone = true;
    }
  }
}
