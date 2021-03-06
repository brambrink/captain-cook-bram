import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  plannedRecipes = [
    {
      name: "Spaghetti Bolognese",
      portionSize: 2,
      imageURL: "/assets/images/spaghettibolognese.jpg",
      method: "",
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
      method: "",
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
      method: "",
      id: 3,
      ingredients: [
        { name: "Spaghetti", amount: 300, unit: "gram" },
        { name: "Red pesto", amount: 400, unit: "gram" },
        { name: "Zucchini", amount: 300, unit: "gram" },
        { name: "Tomatoes", amount: 2, unit: "pieces" },
      ],
    },
  ];

  plannedRecipesObservable: Subject<Recipe[]> = new Subject<Recipe[]>();

  constructor() {}

  planRecipe(selectedRecipe: Recipe) {
    this.plannedRecipes = [...this.plannedRecipes, selectedRecipe];
    this.plannedRecipesObservable.next(this.plannedRecipes);
  }

  removePlannedRecipe(id: number) {
    this.plannedRecipes = this.plannedRecipes.filter((recipe) => recipe.id !== id);
    this.plannedRecipesObservable.next(this.plannedRecipes);
  }

  get getPlannedRecipes() {
    return this.plannedRecipes;
  }

  get getRecipeObserver() {
    return this.plannedRecipesObservable;
  }

  get groceryList() {
    const ingredientsList = this.plannedRecipes.reduce(
      (accumulator, recipe) => (accumulator = [...accumulator, ...recipe.ingredients]),
      [] as { name: string; amount: number; unit: string }[],
    );

    const counter: { [key: string]: { amount: number; unit: string } } = {};

    ingredientsList.forEach(({ name, amount, unit }) =>
      counter[name] !== undefined
        ? (counter[name] = { ...counter[name], amount: counter[name].amount + amount })
        : (counter[name] = { amount, unit }),
    );

    const groceryList = Object.entries(counter)
      .map(([key, { amount, unit }]) => ({
        name: key,
        amount,
        unit,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return groceryList;
  }
}
