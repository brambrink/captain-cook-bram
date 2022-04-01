import { Component, OnInit } from "@angular/core";

import { ModalService } from "src/app/shared/services/modal.service";
import { RecipesService } from "src/app/shared/services/recipes.service";

interface Recipe {
  name: string;
  portionSize: number;
  imageURL: string;
  id: number;
  ingredients: { name: string; amount: number; unit: string }[];
}

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private ModalService: ModalService, private RecipesService: RecipesService) {
    this.recipes = this.RecipesService.recipes;
    this.selectedRecipe = {} as Recipe;
  }

  ngOnInit(): void {}

  handleClick(event: any) {
    if (event.target.id) {
      console.log(typeof event.target.id);
      const findRecipe = this.recipes.find((recipe) => recipe.id == event.target.id);
      if (findRecipe) {
        this.selectedRecipe = findRecipe;
      }
    }
  }
}
