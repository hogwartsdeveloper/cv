import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IMenuLink, menuItems } from './models/toolbar-item.model';
import { IMedia, medias } from '../models/media.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;
  medias: IMedia[] = medias;

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
