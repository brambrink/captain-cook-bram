import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes = [
    {
      name: "Spaghetti Bolognese",
      portionSize: 2,
      imageURL: "/assets/images/spaghettibolognese.jpg",
      method:
        "Add 2 tins plum tomatoes, the finely chopped leaves from ¾ small pack basil, 1 tsp dried oregano, 2 bay leaves, 2 tbsp tomato purée, 1 beef stock cube, 1 deseeded and finely chopped red chilli (if using), 125ml red wine and 6 halved cherry tomatoes. Stir with a wooden spoon, breaking up the plum tomatoes.",
      id: 1,
      ingredients: [
        { name: "Spaghetti", amount: 250, unit: "gram" },
        { name: "Canned tomato ", amount: 400, unit: "gram" },
        { name: "Minced meat", amount: 200, unit: "gram" },
        { name: "Carrots", amount: 150, unit: "gram" },
      ],
    },
    {
      name: "Pasta Pesto",
      portionSize: 2,
      imageURL: "/assets/images/pastapesto.jpg",
      id: 2,
      method: `Step 1 \n Cook pasta in a large pot of boiling water until done. Drain. \n Step 2 \n Meanwhile, heat the oil in a frying pan over medium low heat. Add pesto, onion, and salt and pepper. Cook about five minutes, or until onions are soft. \n Step 3 \n In a large bowl, mix pesto mixture into pasta. Stir in grated cheese. Serve.`,
      ingredients: [
        { name: "Spaghetti", amount: 200, unit: "gram" },
        { name: "Pesto", amount: 400, unit: "gram" },
        { name: "Chicken", amount: 200, unit: "gram" },
        { name: "Tomatoes", amount: 1.5, unit: "pieces" },
      ],
    },
    {
      name: "Pasta Rood",
      portionSize: 4,
      imageURL: "/assets/images/pastarood.jpg",
      method: `Step 1 \n Cook pasta in a large pot of boiling water until done. Drain. \n Step 2 \n Meanwhile, heat the oil in a frying pan over medium low heat. Add pesto, onion, and salt and pepper. Cook about five minutes, or until onions are soft. \n Step 3 \n In a large bowl, mix pesto mixture into pasta. Stir in grated cheese. Serve.`,
      id: 3,
      ingredients: [
        { name: "Spaghetti", amount: 300, unit: "gram" },
        { name: "Red pesto", amount: 400, unit: "gram" },
        { name: "Zucchini", amount: 300, unit: "gram" },
        { name: "Tomatoes", amount: 2, unit: "pieces" },
      ],
    },
    {
      name: "Boerenkool Stamppot",
      portionSize: 6,
      imageURL: "/assets/images/boerenkoolstamppot.jpg",
      method: "",
      id: 4,
      ingredients: [
        { name: "Potatoes", amount: 600, unit: "gram" },
        { name: "Kale", amount: 600, unit: "gram" },
        { name: "Dutch smoked sausage", amount: 2, unit: "pieces" },
        { name: "Bacon", amount: 200, unit: "gram" },
      ],
    },
    {
      name: "Hutspot",
      portionSize: 3,
      imageURL: "/assets/images/hutspot.jpg",
      method: "",
      id: 5,
      ingredients: [
        { name: "Potatoes", amount: 400, unit: "gram" },
        { name: "Carrots", amount: 600, unit: "gram" },
        { name: "Minced meat", amount: 400, unit: "gram" },
        { name: "Onion", amount: 3, unit: "pieces" },
      ],
    },
    {
      name: "Stamppot Zuurkool",
      portionSize: 8,
      imageURL: "/assets/images/zurekool.jpg",
      method: "",
      id: 6,
      ingredients: [
        { name: "Potatoes", amount: 1000, unit: "gram" },
        { name: "Saurkraut", amount: 1000, unit: "gram" },
        { name: "Dutch smoked sausage", amount: 3, unit: "pieces" },
        { name: "Bacon", amount: 225, unit: "gram" },
      ],
    },
  ];

  recipesObservable: Subject<Recipe[]> = new Subject<Recipe[]>();
  selectedRecipeObservable: Subject<Recipe> = new Subject<Recipe>();

  selectRecipe(id: number) {
    const foundRecipe = this.recipes.find((recipe) => recipe.id == id);
    if (foundRecipe) {
      this.selectedRecipeObservable.next(foundRecipe);
      return true;
    } else {
      return undefined;
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes = [recipe, ...this.recipes];
    this.recipesObservable.next(this.recipes);
  }

  removeRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.recipesObservable.next(this.recipes);
  }

  editRecipe(edittedRecipe: Recipe) {
    this.recipes = this.recipes.map((recipe) => {
      if (recipe.id == edittedRecipe.id) {
        recipe = edittedRecipe;
      }
      return recipe;
    });
  }
}
