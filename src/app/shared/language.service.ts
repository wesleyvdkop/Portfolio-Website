import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isNil } from 'lodash';
export type Languages = 'nl_NL' | 'en_US';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: Languages = 'nl_NL';
  private localStorageKey: string = 'language.WK';

  constructor(
    private translateService: TranslateService
  ) {
    const storedLanguage = localStorage.getItem(this.localStorageKey);
    if ( !isNil(storedLanguage) ) {
      this.translateService.use(storedLanguage);
      this.currentLanguage = storedLanguage as Languages;
    }
  }

  public switchLanguage(language: Languages) {
    this.translateService.use(language);
    this.currentLanguage = language;
    localStorage.setItem(this.localStorageKey, language);
  }
}
