import { Injectable } from '@angular/core';
import { Task } from '../components/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [
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

  getTasks(): Promise<Task[]> {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.tasks);
      }, 300);
    });
  }
}
