import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Ingredient } from "src/app/shared/models/ingredient.model";
import { Recipe } from "src/app/shared/models/recipe.model";

import { ModalService } from "src/app/shared/services/modal.service";
import { RecipesService } from "src/app/shared/services/recipes.service";

@Component({
  selector: "app-edit-recipe",
  templateUrl: "./edit-recipe.component.html",
  styleUrls: ["./edit-recipe.component.scss"],
})
export class EditRecipeComponent implements OnInit {
  @Input() selectedRecipe!: Recipe;

  ingredients = this.formBuilder.array([]);

  editRecipeForm = this.formBuilder.group({
    name: "",
    portionSize: 0,
    imageURL: "",
    id: 0,
    method: "",
    ingredients: this.ingredients,
  });

  constructor(
    private formBuilder: FormBuilder,
    private RecipesService: RecipesService,
    private ModalService: ModalService,
  ) {
    this.RecipesService.selectedRecipeObservable.subscribe((recipe) => {
      this.ingredients.clear();

      recipe.ingredients.map((ingredient) =>
        this.ingredients.push(this.formBuilder.group(ingredient)),
      );

      this.editRecipeForm.reset({
        ...recipe,
      });
    });
  }

  ngOnInit(): void {}

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
    const edittedRecipe = this.editRecipeForm.value;
    console.log(edittedRecipe);

    this.RecipesService.editRecipe(edittedRecipe);
    this.RecipesService.selectRecipe(this.selectedRecipe.id);
    this.ModalService.toggleModal("edit");
  }
}
