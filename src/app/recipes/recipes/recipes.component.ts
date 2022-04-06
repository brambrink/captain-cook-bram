import { Component, OnInit } from "@angular/core";

import { Recipe } from "src/app/shared/models/recipe.model";

import { ModalService } from "src/app/shared/services/modal.service";
import { RecipesService } from "src/app/shared/services/recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  showRecipe: boolean;

  constructor(private ModalService: ModalService, private RecipesService: RecipesService) {
    this.recipes = this.RecipesService.recipes;
    this.selectedRecipe = {
      name: "",
      portionSize: 0,
      imageURL: "",
      method: "",
      id: 0,
      ingredients: [{ name: "", amount: 0, unit: "" }],
    };

    this.showRecipe = false;
  }

  ngOnInit(): void {
    this.RecipesService.recipesObservable.subscribe((recipes) => (this.recipes = recipes));
    this.RecipesService.selectedRecipeObservable.subscribe(
      (recipe) => (this.selectedRecipe = recipe),
    );
  }
  openModal() {
    this.ModalService.toggleModal();
  }

  editRecipe() {
    this.ModalService.toggleModal();
  }

  handleClick(event: any) {
    if (event.target.id) {
      this.RecipesService.selectRecipe(event.target.id);

      if (this.selectedRecipe) {
        this.showRecipe = true;
      } else {
        this.showRecipe = false;
      }
    }
  }
}
