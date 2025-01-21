import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  @ViewChild('notes') notes: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log("scroll");
  }

   goUp = () => {
    const id = this.notes.nativeElement;
    // const id = document.getElementById("notes");
    var maxScrollTop = id.scrollHeight - id.clientHeight;
    if (id.scrollTop !== 0) {
      id.scrollTo({
        top: id.scrollTop - 10,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  goDown = () => {
    const id = this.notes.nativeElement;
    var maxScrollDown = id.scrollHeight - id.clientHeight;
    id.scrollTo({
      top: id.scrollTop + 10,
      left: 0,
      behavior: "smooth"
    });
  };


}
