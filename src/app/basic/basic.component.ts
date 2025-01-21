import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  fixedSizeData = Array.from({length: 100}).map((_, i) => `Item #${i}`);

  constructor(){

  }

}
