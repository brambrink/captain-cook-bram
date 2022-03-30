import { isNgTemplate } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { asyncScheduler, Observable, Subject } from "rxjs";

interface Meal {
  name: string;
  portionSize: number;
  imageURL: string;
  id: number;
  ingredients: { name: string; amount: number; unit: string }[];
}

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  meals = [
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

  observableMeals: Subject<Meal[]> = new Subject<Meal[]>();

  constructor() {}

  addMeal() {
    this.meals = [
      ...this.meals,
      {
        name: "Boerenkool Stamppot",
        portionSize: 6,
        imageURL: "/assets/images/boerenkoolstamppot.jpg",
        id: 4,
        ingredients: [
          { name: "Aardappellen", amount: 600, unit: "gram" },
          { name: "Boerenkool", amount: 600, unit: "gram" },
          { name: "Rookworst", amount: 2, unit: "stuks" },
          { name: "Tomaten", amount: 2, unit: "stuks" },
        ],
      },
    ];
    this.observableMeals.next(this.meals);
  }

  removeMeal(id: number) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
    this.observableMeals.next(this.meals);
  }

  get plannedMeals() {
    return this.meals;
  }

  get observablePlannedMeals() {
    return this.observableMeals;
  }

  get groceryList() {
    const ingredientsList = this.meals.reduce(
      (accumulator, meal) => (accumulator = [...accumulator, ...meal.ingredients]),
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
