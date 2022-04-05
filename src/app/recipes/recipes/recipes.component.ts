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
    this.selectedRecipe = {} as Recipe;
    this.showRecipe = false;
  }

  ngOnInit(): void {
    this.RecipesService.recipesObservable.subscribe((data) => (this.recipes = data));
  }
  openModal() {
    this.ModalService.toggleModal();
  }

  handleClick(event: any) {
    if (event.target.id) {
      const findRecipe = this.recipes.find((recipe) => recipe.id == event.target.id);
      if (findRecipe) {
        this.selectedRecipe = findRecipe;
        this.showRecipe = true;
      } else {
        this.showRecipe = false;
      }
    }
  }
}
