import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

interface Meal {
  name: string;
  portionSize: number;
  imageURL: string;
  id: number;
  ingredients: { name: string; amount: number; unit: string }[];
}

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  meals: Meal[];

  constructor(private PlannedService: PlannedService) {
    this.meals = this.PlannedService.plannedMeals;
  }

  ngOnInit(): void {
    this.PlannedService.observablePlannedMeals.subscribe((value: any) => (this.meals = value));
  }

  removeMeal(id: number) {
    this.PlannedService.removeMeal(id);
  }

  addMeal() {
    this.PlannedService.addMeal();
  }

  get groceryList() {
    return this.PlannedService.groceryList;
  }
}
