import { Component, Input, ViewChild, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ComponentInfo } from '../../shared/Models/componentInfo';
import { MatSidenav } from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';
import { NavigatioMenuToggleService } from '../../shared/Services/navigation-menu-toggle.service';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  /*The logic of open-in-window>900 and close-in-window<900*/
  @ViewChild('sidenav') sidenav?: MatSidenav;
  constructor(@Inject(PLATFORM_ID) private platformId: any, public navigationMenuService: NavigatioMenuToggleService) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.toggleSidenav(window.innerWidth);
      });
    }
  }
  private _componentsList?: Array<ComponentInfo>;
  public get componentsList(): Array<ComponentInfo> | undefined {
    return this._componentsList;
  }
  @Input()
  public set componentsList(value: Array<ComponentInfo> | undefined) {
    this._componentsList = value;
  }

  private toggleSidenav(width: number): void {
    if (width < 900) {
      this.navigationMenuService.setOpen(false)
      this.sidenav?.close();
    } else {
      this.navigationMenuService.setOpen(true)
      this.sidenav?.open();
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      const target = event.target as Window;
      setTimeout(() => {
        this.toggleSidenav(target.innerWidth);
      });
    }
  }
}