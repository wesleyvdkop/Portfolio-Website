import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Languages = 'nl_NL' | 'en_US';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: Languages = 'nl_NL';

  constructor(
    private translateService: TranslateService) {
  }

  public switchLanguage(language: Languages) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }
}
