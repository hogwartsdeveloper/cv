import { Component, OnInit } from '@angular/core';
import { IMenuLink, menuItems } from './models/toolbar-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openMobileMenu(menu: HTMLDivElement) {
    this.openMenu = !this.openMenu;
    if (menu.className.includes('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
}
