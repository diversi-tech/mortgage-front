import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-magic-link',
  standalone: true,
  imports: [ BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,RouterModule,
    CommonModule,
    CdkMenuTrigger,
    AppRoutingModule
    ,MaterialModule
  ],
  templateUrl: './magic-link.component.html',
  styleUrl: './magic-link.component.css'
})
export class MagicLinkComponent {

}
