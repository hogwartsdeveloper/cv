import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from './services/navigation.service';
import { LoaderService } from './services/loader.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'interactive-cv';
  loading: boolean = false;
  destroy$ = new Subject();
  constructor(
    private translateService: TranslateService,
    private navigationService: NavigationService,
    private loadingService: LoaderService
  ) {
    this.translateService.setDefaultLang('ru');
  }

  ngOnInit() {
    this.getBrowserLanguage();
    this.getWindowScroll();
    this.loadingService.loading$
      .pipe(
        tap(() => (this.loading = true)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.showLoading());
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

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
