import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from './services/navigation.service';
import { LoaderService } from './services/loader.service';
import { skip, Subject, take, takeUntil, tap } from 'rxjs';
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
    this.darkModeService.onDarkMode$.pipe(take(1)).subscribe((darkMode) => {
      const darkLocal = localStorage.getItem('dark');
      if (!darkLocal) {
        this.isDarkMode = darkMode;
      }
      if (darkLocal === 'dark') {
        this.isDarkMode = true;
      }
      if (darkLocal === 'white') {
        this.isDarkMode = false;
      }
      this.darkModeService.onDarkMode$.next(this.isDarkMode);
      this.addStyleDarkMode();
    });
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
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe((darkMode) => {
        this.isDarkMode = darkMode;

        this.addStyleDarkMode();
      });
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
      localStorage.setItem('dark', 'white');
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
