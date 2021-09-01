import { Component } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'wk-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(
    public languageService: LanguageService,
    public themeService: ThemeService
  ) {
  }
}
