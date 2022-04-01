import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  isOpen: boolean;
  isOpenObservable: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isOpen = false;
    this.isOpenObservable.next(this.isOpen);
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
    this.isOpenObservable.next(this.isOpen);
  }
}
