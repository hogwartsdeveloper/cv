import { Component, OnInit } from '@angular/core';
import { ILanguage, LanguageType } from '../../models/language.model';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  selectedLanguage: ILanguage = { value: LanguageType.En, name: 'en' };
  languages: ILanguage[] = [
    { value: LanguageType.En, name: 'en' },
    { value: LanguageType.Kz, name: 'kz' },
    { value: LanguageType.Ru, name: 'ru' },
  ];
  constructor(
    private translateService: TranslateService,
    private loadingService: LoaderService
  ) {}

  ngOnInit(): void {
    const currentLang =
      this.translateService.currentLang ?? this.translateService.defaultLang;

    switch (currentLang) {
      case 'en':
        this.selectedLanguage = { value: LanguageType.En, name: 'en' };
        break;
      case 'kz':
        this.selectedLanguage = { value: LanguageType.Kz, name: 'kz' };
        break;
      case 'ru':
        this.selectedLanguage = { value: LanguageType.Ru, name: 'ru' };
        break;
    }
  }

  openLangMenu(menu: HTMLUListElement) {
    menu.style.display = 'block';
  }

  onSelectLang(lang: ILanguage) {
    this.selectedLanguage = lang;
    this.translateService.use(lang.name);
    this.loadingService.loading$.next(null);
  }

  closeLangMenu(menu: HTMLUListElement) {
    menu.style.display = 'none';
  }
}
