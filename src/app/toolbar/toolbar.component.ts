import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IMenuLink,
  menuItems,
  MenuNavigateEnum,
} from './models/toolbar-item.model';
import { IMedia, medias } from '../models/media.model';
import { NavigationService } from '../services/navigation.service';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isDarkMode: boolean;
  menuItems: IMenuLink[] = menuItems;
  openMenu: boolean = false;
  medias: IMedia[] = medias;
  activeNav: MenuNavigateEnum;
  destroy$ = new Subject();

  constructor(
    private navigationService: NavigationService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeService.onDarkMode$.pipe(take(1)).subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });

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
    this.darkModeService.onDarkMode$.next(this.isDarkMode);
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
