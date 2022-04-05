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

  showTitle: boolean;

  constructor() {
    this.showTitle = false;
  }

  ngOnInit(): void {}

  toggleTitle() {
    this.showTitle = !this.showTitle;
  }
}
