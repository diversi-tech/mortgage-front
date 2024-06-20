import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ComponentInfo } from '../../Models/componentInfo';
import { Route, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BidiModule } from '@angular/cdk/bidi';
//-----
@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [MatIconModule, BrowserAnimationsModule, MatButtonModule, BidiModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    CdkMenu,
    CdkMenuItem,
    RouterModule,
    BrowserModule,
    CdkMenuTrigger,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    CdkMenu,
    CdkMenuItem,
    RouterModule,
    BrowserModule,
    CdkMenuTrigger,
    AppRoutingModule],
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

}
