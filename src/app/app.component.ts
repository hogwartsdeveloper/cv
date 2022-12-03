import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interactive-cv';

  constructor(
    private translateService: TranslateService,
    private navigationService: NavigationService
  ) {
    this.translateService.setDefaultLang('ru');
  }

  ngOnInit() {
    this.getBrowserLanguage();
    this.getWindowScroll();
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
}
