import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from './services/navigation.service';
import { LoaderService } from './services/loader.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'interactive-cv';
  loading: boolean = true;
  isDarkMode: boolean = true;
  destroy$ = new Subject();
  constructor(
    private translateService: TranslateService,
    private navigationService: NavigationService,
    private loadingService: LoaderService,
    private darkModeService: DarkModeService
  ) {
    this.translateService.setDefaultLang('ru');
  }

  ngOnInit() {
    this.getDarkMode();
    this.getBrowserLanguage();
    this.getWindowScroll();
    this.showLoading();
    this.loadingService.loading$
      .pipe(
        tap(() => (this.loading = true)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.showLoading());
  }

  getDarkMode() {
    this.darkModeService.onDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((darkMode) => {
        this.isDarkMode = darkMode;
        this.addStyleDarkMode();
      });

    const dark = localStorage.getItem('dark');
    if (!dark || !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = false;
    }
    this.addStyleDarkMode();
    this.darkModeService.onDarkMode$.next(this.isDarkMode);
  }
  getBrowserLanguage() {
    const language = navigator.language;

    if (language.includes('en')) {
      this.translateService.use('en');
    }

    if (language.includes('kz')) {
      this.translateService.use('kz');
    }

    if (language.includes('ru')) {
      this.translateService.use('ru');
    }
  }

  getWindowScroll() {
    window.addEventListener('scroll', () =>
      this.navigationService.scroll$.next(true)
    );
  }

  showLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
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
