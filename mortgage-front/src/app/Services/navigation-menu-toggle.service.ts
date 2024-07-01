import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavigatioMenuToggleService {
  private isOpen = false;

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  isOpened() {
    return this.isOpen;
  }
}
