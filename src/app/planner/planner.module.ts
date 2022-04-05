import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { PlannerComponent } from "./planner/planner.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [PlannerComponent, CardComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [PlannerComponent],
})
export class PlannerModule {}
