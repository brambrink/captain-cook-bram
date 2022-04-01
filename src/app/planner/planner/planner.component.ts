import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { PlannedService } from "src/app/shared/services/planned.service";
import { RecipesService } from "src/app/shared/services/recipes.service";
import { ModalService } from "src/app/shared/services/modal.service";

interface Recipe {
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
  plannedRecipes: Recipe[];
  recipes: Recipe[];

  recipeSelector = this.formBuilder.group({
    selectedRecipe: 0,
  });

  constructor(
    private PlannedService: PlannedService,
    private RecipesService: RecipesService,
    private ModalService: ModalService,
    private formBuilder: FormBuilder,
  ) {
    this.plannedRecipes = this.PlannedService.getPlannedRecipes;
    this.recipes = this.RecipesService.recipes;
  }

  ngOnInit(): void {
    this.PlannedService.plannedRecipesObservable.subscribe(
      (recipes: Recipe[]) => (this.plannedRecipes = recipes),
    );
  }

  handleClick() {
    this.ModalService.toggleModal();
  }

  onSubmit() {
    const selectedRecipe = this.getSelectedRecipe(this.recipeSelector.value.selectedRecipe);
    if (selectedRecipe) {
      this.planRecipe(selectedRecipe);
      this.ModalService.toggleModal();
    }
  }

  removePlannedRecipe(id: number) {
    this.PlannedService.removePlannedRecipe(id);
  }

  planRecipe(selectedRecipe: Recipe) {
    this.PlannedService.planRecipe(selectedRecipe);
  }

  getSelectedRecipe(id: number) {
    return this.RecipesService.getSelectedRecipe(id);
  }

  get groceryList() {
    return this.PlannedService.groceryList;
  }
}
