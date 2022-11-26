import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { menuItems } from './models/toolbar-item.model';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  imports: [MatIconModule, NgForOf, NgClass],
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuItems = menuItems;
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
