import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headersub1',
  templateUrl: './headersub1.component.html',
  styleUrls: ['./headersub1.component.css']
})
export class Headersub1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("header sub module")
  }

}
