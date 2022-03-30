import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() imageURL!: string;
  @Input() portionSize!: number;

  @Output() answer: EventEmitter<number> = new EventEmitter();
  onClick() {
    this.answer.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
