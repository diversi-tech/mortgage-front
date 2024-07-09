import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'document-type-list',
  standalone: true,
  imports: [ RouterModule,
    CommonModule
    ,MaterialModule
  ],
  templateUrl: './document-type-list.component.html',
  styleUrl: './document-type-list.component.css'
})
export class DocumentTypeListComponent {

}
