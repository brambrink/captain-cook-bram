import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  @Input() groceryList!: { name: string; amount: number; unit: string }[];

  constructor() {}

  ngOnInit(): void {}
}
