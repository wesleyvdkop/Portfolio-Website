import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type Themes = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: Themes = 'light';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add(this.currentTheme);
  }

  public switchTheme(theme: Themes) {
    this.currentTheme = theme;
  }
}
