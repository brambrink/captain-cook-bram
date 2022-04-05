import { Injectable, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  isOpen: boolean;
  isOpenObservable: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.isOpen = false;
    this.isOpenObservable.next(this.isOpen);
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
    this.isOpenObservable.next(this.isOpen);

    this.document.body.classList.toggle("is-modal-open", this.isOpen);
  }
}
