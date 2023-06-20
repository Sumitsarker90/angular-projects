import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  @Input()
  color: string | undefined;
  text: string | undefined;
  @Output() btnClick ={}=  new EventEmitter();

  onClick(){
    console.log("Add")
    this.btnClick.emit();
  }

}
