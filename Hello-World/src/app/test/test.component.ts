import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public name = "Kandarp";
public successClass = "text-success";
public hasError = false;
public isSpecial =true;
public messageClasses = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
}
public highlightcolor = "blue";
public styles = {
  "color" : "pink",
  "font-style": "italic"
}
  constructor() { }

  ngOnInit() {
  }

}
