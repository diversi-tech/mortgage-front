import { Component, Input,  AfterViewInit, ViewChild, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ComponentInfo } from '../../Models/componentInfo';
import {  RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { MaterialModule } from '../../material/material.module';
import { MatSidenav } from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';
import { NavigatioMenuToggleService } from '../../services/navigation-menu-toggle.service';

@Component({
  selector: 'navigation-menu',
  standalone: true,
  imports: [ BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,RouterModule,
    BrowserModule,CdkMenuTrigger,
    AppRoutingModule,MaterialModule
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent  implements OnInit {
  /*The logic of open-in-window>900 and close-in-window<900*/
  @ViewChild('sidenav') sidenav?: MatSidenav;
  constructor(@Inject(PLATFORM_ID) private platformId: any,public navigationMenuService: NavigatioMenuToggleService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidenav(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const target = event.target as Window;
      this.toggleSidenav(target.innerWidth);
    }
  }

  private toggleSidenav(width: number) {
    if (width < 900) {
      this.sidenav?.close();
    } else {      
      this.sidenav?.open();
    }
  }
/* until here/ */
  private _componentsList?: Array<ComponentInfo>;
  public get componentsList(): Array<ComponentInfo> | undefined {
    return this._componentsList;
  }
  @Input()
  public set componentsList(value: Array<ComponentInfo> | undefined) {
    this._componentsList = value;
  }
  // isSidebarOpened=true;

  // toggleSidebar() {
  //   this.isSidebarOpened==false?this.isSidebarOpened=true:this.isSidebarOpened=false;
  // }

}
