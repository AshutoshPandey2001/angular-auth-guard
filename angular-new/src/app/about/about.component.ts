import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  msg = 'Data Passing child to parent';

  @Output() dataEvent = new EventEmitter<string>();
  @Input()
  dada!: string;
  constructor() {}

  ngOnInit(): void {}
  // emitData(){
  //   this.dataEvent.emit(this.msg);
  // }
}
