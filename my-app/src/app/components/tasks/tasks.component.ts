import { Component } from '@angular/core';
import{TASKS} from '../../mock-tasks';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks:Task[]=TASKS;

}
