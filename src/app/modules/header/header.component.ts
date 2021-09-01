import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../shared/language.service';
import { Themes } from '../../shared/theme.service';

@Component({
  selector: 'wk-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  public currentTheme: Themes = 'light';

  constructor(
    public languageService: LanguageService,
    private translateService: TranslateService,
    private renderer: Renderer2
  ) {
  }

  public switchTheme(theme: Themes) {
    if ( theme === 'dark' ) {
      this.renderer.addClass(document.body, 'theme-dark');
      this.currentTheme = 'dark';
    } else {
      this.renderer.removeClass(document.body, 'theme-dark');
      this.currentTheme = 'light';
    }
  }
}
