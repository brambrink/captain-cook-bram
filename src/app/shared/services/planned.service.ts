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
      id: 1,
      ingredients: [
        { name: "Spaghetti", amount: 250, unit: "gram" },
        { name: "Tomatenblokjes", amount: 400, unit: "gram" },
        { name: "Gehakt", amount: 200, unit: "gram" },
        { name: "Wortel", amount: 2, unit: "stuks" },
      ],
    },
    {
      name: "Pasta Pesto",
      portionSize: 2,
      imageURL: "/assets/images/pastapesto.jpg",
      id: 2,
      ingredients: [
        { name: "Spaghetti", amount: 200, unit: "gram" },
        { name: "Pesto", amount: 400, unit: "gram" },
        { name: "Kip", amount: 200, unit: "gram" },
        { name: "Tomaten", amount: 1.5, unit: "stuks" },
      ],
    },
    {
      name: "Pasta Rood",
      portionSize: 4,
      imageURL: "/assets/images/pastarood.jpg",
      id: 3,
      ingredients: [
        { name: "Spaghetti", amount: 300, unit: "gram" },
        { name: "Rode pesto", amount: 400, unit: "gram" },
        { name: "Courgette", amount: 300, unit: "gram" },
        { name: "Tomaten", amount: 2, unit: "stuks" },
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
