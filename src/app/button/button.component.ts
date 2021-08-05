import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() styles: any = {};
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() buttonTitle: string = '';
  @Input() ad_txt: string = '';
  @Input() state: string = '';
  @Input() updatedAt!: Date;

  @Output() textBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onTextBtnClick() {
    this.textBtnClickEmt.emit('You have clicked on a text button.');
  }  
}
