import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  @Input() imageURL!: string;
  @Input() id!: number;

  hideTitle: boolean;

  constructor() {
    this.hideTitle = true;
  }

  ngOnInit(): void {}

  toggleTitle() {
    this.hideTitle = !this.hideTitle;
  }
}
