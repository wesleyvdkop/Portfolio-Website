import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Themes } from '../../shared/theme.service';

@Component({
  selector: 'wk-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  public currentLanguage: string;
  public currentTheme: Themes = 'light';

  constructor(
    private translateService: TranslateService,
    private renderer: Renderer2
  ) {
    this.currentLanguage = this.translateService.getDefaultLang();
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public switchTheme(theme: Themes) {
    if ( theme === 'dark') {
      this.renderer.addClass(document.body, 'theme-dark');
      this.currentTheme = 'dark';
    } else {
      this.renderer.removeClass(document.body, 'theme-dark');
      this.currentTheme = 'light';
    }
  }
}
