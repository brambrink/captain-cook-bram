import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { Recipe } from "src/app/shared/models/recipe.model";

import { PlannedService } from "src/app/shared/services/planned.service";
import { RecipesService } from "src/app/shared/services/recipes.service";
import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  plannedRecipes: Recipe[];
  recipes: Recipe[];
  selectedRecipe: Recipe;

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
    this.selectedRecipe = {} as Recipe;
  }

  ngOnInit(): void {
    this.PlannedService.plannedRecipesObservable.subscribe(
      (recipes: Recipe[]) => (this.plannedRecipes = recipes),
    );
    this.RecipesService.selectedRecipeObservable.subscribe(
      (recipe) => (this.selectedRecipe = recipe),
    );
  }

  openModal() {
    this.ModalService.toggleModal("plan");
  }

  onSubmit() {
    if (this.RecipesService.selectRecipe(this.recipeSelector.value.selectedRecipe)) {
      this.planRecipe(this.selectedRecipe);
      this.ModalService.toggleModal("plan");
    }
  }

  removePlannedRecipe(id: number) {
    this.PlannedService.removePlannedRecipe(id);
  }

  planRecipe(selectedRecipe: Recipe) {
    this.PlannedService.planRecipe(selectedRecipe);
  }

  getSelectedRecipe(id: number) {
    return this.RecipesService.selectRecipe(id);
  }

  get groceryList() {
    return this.PlannedService.groceryList;
  }
}
