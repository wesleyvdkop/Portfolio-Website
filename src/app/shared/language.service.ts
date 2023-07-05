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
  private supportedLanguages: string[] = ['nl_NL', 'en_US'];
  private browserSupportedLangauges: string[] = this.supportedLanguages.map((supportedLanguage) => supportedLanguage.split('_')[0]);

  constructor(private translateService: TranslateService) {
    this.initializeLanguage();
  }

  public switchLanguage(language: Languages) {
    if (this.supportedLanguages.includes(language)) {
      this.setLanguage(language);
      localStorage.setItem(this.localStorageKey, language);
    }
  }

  private initializeLanguage() {
    const storedLanguage = localStorage.getItem(this.localStorageKey);
    const userLanguage = navigator.language;

    if (storedLanguage && this.supportedLanguages.includes(storedLanguage)) {
      this.setLanguage(storedLanguage as Languages);
    } else if (userLanguage && this.browserSupportedLangauges.includes(userLanguage)) {
      switch(userLanguage){
        case 'nl':
          this.setLanguage('nl_NL');
          break;
        case 'en':
          this.setLanguage('en_US');
          break
      }
    }
  }

  private setLanguage(language: Languages) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }
}
