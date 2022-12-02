import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IMenuLink, menuItems } from './models/toolbar-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;

  @ViewChildren('links') links: QueryList<ElementRef>;

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

  click(link: HTMLAnchorElement) {
    this.links.forEach((l) => {
      if (link === l.nativeElement) {
        l.nativeElement.classList.add('bg-fuchsia-500');
      } else {
        l.nativeElement.classList.remove('bg-fuchsia-500');
      }
    });
  }
}
