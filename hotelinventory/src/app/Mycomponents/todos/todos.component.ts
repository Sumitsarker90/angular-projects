import { Component, OnInit } from '@angular/core';

import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {
  todos:todo[];
  constructor(){
    this.todos=[
      {
        sno:1,
        title:'This is a title',
        desc:'This is description',
        active:true
      },{
        sno:2,
        title:'This is a title',
        desc:'This is description',
        active:true

      }
      
    ]
  }

}
