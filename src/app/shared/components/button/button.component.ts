import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Output() answer: EventEmitter<number> = new EventEmitter();
  onClick() {
    this.answer.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
