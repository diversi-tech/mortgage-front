import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UiStateService {
  showGeneral: boolean = true;
  setShowGeneral(show: boolean) {
    this.showGeneral = show;
  }
}