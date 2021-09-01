import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { isNil } from 'lodash';

export type Themes = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: Themes = 'light';
  private localStorageKey: string = 'theme.WK';

  private renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const storedTheme = localStorage.getItem(this.localStorageKey);
    if ( !isNil(storedTheme) ) {
      this.currentTheme = storedTheme as Themes;
      this.setClass(storedTheme as Themes)
    }
  }

  public switchTheme(theme: Themes) {
    this.setClass(theme);
    this.currentTheme = theme;
    localStorage.setItem(this.localStorageKey, theme);
  }

  private setClass(theme: Themes) {
    if ( theme === 'dark' ) {
      this.renderer.addClass(document.body, 'theme-dark');
    } else {
      this.renderer.removeClass(document.body, 'theme-dark');
    }
  }
}
