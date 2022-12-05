import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IMenuLink,
  menuItems,
  MenuNavigateEnum,
} from './models/toolbar-item.model';
import { IMedia, medias } from '../models/media.model';
import { NavigationService } from '../services/navigation.service';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = true;
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;
  medias: IMedia[] = medias;
  activeNav: MenuNavigateEnum;
  destroy$ = new Subject();

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    const dark = localStorage.getItem('dark');
    if (!dark) {
      this.isDarkMode = false;
    }
    this.addStyleDarkMode();

    this.navigationService.navigate$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((navigate) => {
        this.activeNav = navigate;
      });
  }

  openMobileMenu(menu: HTMLDivElement) {
    this.openMenu = !this.openMenu;
    if (menu.className.includes('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  click(id: MenuNavigateEnum) {
    this.navigationService.navigate$.next(id);
  }

  clickMobile(id: MenuNavigateEnum, block: HTMLDivElement) {
    if (id === MenuNavigateEnum.HOME) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
    this.click(id);
    this.openMobileMenu(block);
  }

  changeDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.addStyleDarkMode();
  }

  addStyleDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('dark');
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
