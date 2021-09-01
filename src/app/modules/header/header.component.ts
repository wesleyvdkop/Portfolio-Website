import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wk-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  public currentLanguage: string;

  constructor(
    private translateService: TranslateService
  ) {
    this.currentLanguage = this.translateService.getDefaultLang();
    console.log(this.currentLanguage)
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }
}
