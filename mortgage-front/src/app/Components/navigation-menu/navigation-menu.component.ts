import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ComponentInfo } from '../../Models/componentInfo';
import { Route, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'navigation-menu',
  standalone: true,
  imports: [ BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,RouterModule,
    BrowserModule,CdkMenuTrigger,
    AppRoutingModule,CdkMenu,CdkMenuItem,RouterModule,BrowserModule,CdkMenuTrigger,
    AppRoutingModule,MaterialModule
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  private _componentsList?: Array<ComponentInfo>;
  public get componentsList(): Array<ComponentInfo> | undefined {
    return this._componentsList;
  }
  @Input()
  public set componentsList(value: Array<ComponentInfo> | undefined) {
    this._componentsList = value;
  }
  isSidebarOpened=true;

  toggleSidebar() {
    this.isSidebarOpened==false?this.isSidebarOpened=true:this.isSidebarOpened=false;
  }

}
