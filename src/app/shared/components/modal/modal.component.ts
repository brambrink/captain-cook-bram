import { Component, Input, OnInit } from "@angular/core";

import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() modalName!: string;
  isOpen: boolean;

  constructor(private ModalService: ModalService) {
    this.isOpen = false;
    this.ModalService.activeModalObservable.subscribe((name) => {
      this.isOpen = name === this.modalName ? true : false;
    });
  }

  ngOnInit(): void {}

  toggleModal() {
    this.ModalService.toggleModal(this.modalName);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
