import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() newTaskFromHome: any;

  @Output() toSendToHome = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendItToHome() {
    console.log(this.newTaskFromHome);
    this.toSendToHome.emit(this.newTaskFromHome)
  }

}
