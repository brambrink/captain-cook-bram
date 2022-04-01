import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { ButtonComponent } from "./components/button/button.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AsideComponent } from "./components/aside/aside.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [
    NavigationComponent,
    ButtonComponent,
    DropdownComponent,
    AsideComponent,
    ModalComponent,
  ],
  imports: [RouterModule, CommonModule],
  exports: [NavigationComponent, ButtonComponent, AsideComponent, ModalComponent],
})
export class SharedModule {}
