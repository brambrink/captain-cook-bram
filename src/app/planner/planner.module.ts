import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PlannerComponent } from "./planner/planner.component";
import { CardComponent } from "./card/card.component";
import { GroceryListComponent } from "./grocery-list/grocery-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PlannerComponent, CardComponent, GroceryListComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [PlannerComponent],
})
export class PlannerModule {}
