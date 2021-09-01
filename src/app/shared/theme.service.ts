import { Injectable } from '@angular/core';

export type Themes = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: Themes = 'light';

  public switchTheme(theme: Themes) {
    this.currentTheme = theme;
  }
}
