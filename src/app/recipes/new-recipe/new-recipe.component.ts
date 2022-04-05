import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { ModalService } from "src/app/shared/services/modal.service";
import { RecipesService } from "src/app/shared/services/recipes.service";

@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.scss"],
})
export class NewRecipeComponent implements OnInit {
  ingredients = this.formBuilder.array([
    this.formBuilder.group({
      name: "Dough",
      amount: 200,
      unit: "gram",
    }),
  ]);

  newRecipeForm = this.formBuilder.group({
    name: "Pizza Margaritha",
    portionSize: 2,
    ingredients: this.ingredients,
  });

  constructor(
    private formBuilder: FormBuilder,
    private RecipesService: RecipesService,
    private ModalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.ModalService.toggleModal();
  }

  addIngredientInput() {
    this.ingredients.push(
      this.formBuilder.group({
        name: "",
        amount: 0,
        unit: "",
      }),
    );
  }

  deleteIngredientInput(i: number) {
    if (i !== 0) {
      this.ingredients.removeAt(i);
    }
  }

  onSubmit() {
    const newRecipe = this.newRecipeForm.value;
    newRecipe.id = Math.round(Math.random() * 1000);
    newRecipe.imageURL = "/assets/images/default.jpeg";

    console.log(newRecipe);
    this.RecipesService.addRecipe(newRecipe);
    this.ModalService.toggleModal();
  }
}
