import { ChangeDetectorRef, Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiStateService } from '../../Services/uiState.service';
 
@Component({
  selector: 'page-not-found',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  constructor(private uiStateService: UiStateService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log(this.uiStateService.showGeneral);
    
    setTimeout(() => {
      this.uiStateService.setShowGeneral(false);
      this.cdr.detectChanges();
    }, 0);  }
    
}
