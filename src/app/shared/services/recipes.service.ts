import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes = [
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
    {
      name: "Hutspot",
      portionSize: 3,
      imageURL: "/assets/images/hutspot.jpg",
      id: 5,
      ingredients: [
        { name: "Aardappellen", amount: 400, unit: "gram" },
        { name: "Wortels", amount: 600, unit: "gram" },
        { name: "Gehakt", amount: 400, unit: "gram" },
        { name: "Ui", amount: 3, unit: "stuks" },
      ],
    },
    {
      name: "Stamppot Zuurkool",
      portionSize: 8,
      imageURL: "/assets/images/zurekool.jpg",
      id: 6,
      ingredients: [
        { name: "Aardappellen", amount: 1000, unit: "gram" },
        { name: "Zuurkool", amount: 1000, unit: "gram" },
        { name: "Rookworst", amount: 3, unit: "stuks" },
        { name: "Spekjes", amount: 200, unit: "gram" },
      ],
    },
  ];

  getSelectedRecipe(id: number) {
    return this.recipes.find((recipe) => recipe.id == id);
  }
  constructor() {}
}
