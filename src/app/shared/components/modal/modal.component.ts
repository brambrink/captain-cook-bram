import { Component, OnInit } from "@angular/core";

import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  isOpen: boolean;

  constructor(private ModalService: ModalService) {
    this.isOpen = false;
    this.ModalService.isOpenObservable.subscribe((isOpen) => (this.isOpen = isOpen));
  }

  ngOnInit(): void {}

  handleClick() {
    this.ModalService.toggleModal();
  }

  stopPropagation(event: Event) {
    console.log(event);
    event.stopPropagation();
  }
}
