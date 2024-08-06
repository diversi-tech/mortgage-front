import { ChangeDetectorRef, Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
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
  constructor( private cdr: ChangeDetectorRef) {}
    
}
