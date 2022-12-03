import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  IMenuLink,
  menuItems,
  MenuNavigateEnum,
} from './models/toolbar-item.model';
import { IMedia, medias } from '../models/media.model';
import { NavigationService } from '../services/navigation.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;
  medias: IMedia[] = medias;
  activeNav: MenuNavigateEnum;
  destroy$ = new Subject();

  @ViewChildren('links') links: QueryList<ElementRef>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.navigate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((navigate) => (this.activeNav = navigate));
  }

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

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
