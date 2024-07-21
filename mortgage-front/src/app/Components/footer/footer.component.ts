import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { MatToolbar } from '@angular/material/toolbar';
// import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'footer',
  standalone: true,
  imports: [ BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,RouterModule,
    CommonModule,
    CdkMenuTrigger,
    AppRoutingModule
    ,MaterialModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',

})
export class FooterComponent implements AfterViewInit{
  @ViewChild('footer') footer!: ElementRef;

  ngAfterViewInit() {
  }

}
