import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  // @Input() toggleDrawer!: () => void;
  isOpen = false;

  toggleNavigationMenu() {
    this.isOpen = !this.isOpen;
  }
}

