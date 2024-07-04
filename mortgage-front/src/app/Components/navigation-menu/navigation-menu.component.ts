import { Component, Input, AfterViewInit, ViewChild, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';
import { ComponentInfo } from '../../Models/componentInfo';
import { NavigatioMenuToggleService } from '../../Services/navigation-menu-toggle.service';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  @Input() componentsList?: Array<ComponentInfo>;

  constructor(@Inject(PLATFORM_ID) private platformId: any,public navigationMenuService:NavigatioMenuToggleService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.toggleSidenav(window.innerWidth);
      });
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

  private toggleSidenav(width: number): void {
    if (width < 900) {
      this.sidenav?.close();
    } else {
      this.sidenav?.open();
    }
  }
}


