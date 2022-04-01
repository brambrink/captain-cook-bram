import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RecipesComponent } from "./recipes/recipes.component";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [RecipesComponent, CardComponent],
  imports: [CommonModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
