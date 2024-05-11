import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   goUp = () => {

    const id = document.getElementById("notes");
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
    const id = document.getElementById("notes");

    var maxScrollDown = id.scrollHeight - id.clientHeight;
    id.scrollTo({
      top: id.scrollTop + 10,
      left: 0,
      behavior: "smooth"
    });
  };


}
