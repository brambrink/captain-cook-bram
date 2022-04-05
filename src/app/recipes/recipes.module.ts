import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { RecipesComponent } from "./recipes/recipes.component";
import { CardComponent } from "./card/card.component";
import { NewRecipeComponent } from "./new-recipe/new-recipe.component";

@NgModule({
  declarations: [RecipesComponent, CardComponent, NewRecipeComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
