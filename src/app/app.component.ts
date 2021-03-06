import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(document.body,'intro');
    setTimeout(() => {
      this.renderer.removeClass(document.body,'intro');
    }, 2000);
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ? this.routeCheck(event) : null;
    });
  }

  public routeCheck(url: NavigationEnd) {
    if ( url.url === '/en' ) {
      this.languageService.switchLanguage('en_US');
    }
  }
}
