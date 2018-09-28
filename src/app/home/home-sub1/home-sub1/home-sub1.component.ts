import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-sub1",
  templateUrl: "./home-sub1.component.html",
  styleUrls: ["./home-sub1.component.css"]
})
export class HomeSub1Component implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("home sub module");
  }
}
