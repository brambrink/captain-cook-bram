import { Injectable, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  activeModalObservable: Subject<string> = new Subject<string>();
  activeModal: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.activeModal = "";
    this.activeModalObservable.next(this.activeModal);
  }

  toggleModal(name: string) {
    let isModalOpen = false;

    if (this.activeModal) {
      this.activeModal = "";
    } else {
      this.activeModal = name;
      isModalOpen = true;
    }

    this.activeModalObservable.next(this.activeModal);

    this.document.body.classList.toggle("is-modal-open", isModalOpen);
  }
}
