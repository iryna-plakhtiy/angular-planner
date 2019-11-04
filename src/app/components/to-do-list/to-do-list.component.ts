import {Component, OnInit} from '@angular/core';

import { Task } from '../interfaces';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // get tasks from TasksService here
  }

  showMessage(task: Task) {
    console.log(`${task.description} is done. GOOD JOB!`);
  }
}
