import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {
  @Input() todos!: todo;

}
