import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { ThemeService } from '../../shared/theme.service';
import { forEach } from 'lodash';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'wk-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('headingControls', {static: true})
  private headingControls!: ElementRef;

  @ViewChild('headingContent', {static: true})
  private headingContent!: ElementRef;

  private mediumScreenSize = 992;
  private startDelay!: number;

  constructor(
    public languageService: LanguageService,
    public themeService: ThemeService
  ) {
  }

  public ngOnInit(): void {
    this.startDelay = window.innerWidth <= this.mediumScreenSize ? 0 : 1500;

    const controls = this.headingControls.nativeElement.children;
    const content = this.headingContent.nativeElement.children;

    this.fadeInAnimation(controls);
    this.fadeInAnimation(content);
  }

  private fadeInAnimation(elements: any, delayPerElement = 150): void {
    forEach(elements, (elementChild, index: number) => {
      anime({
        targets: elementChild,
        keyframes: [
          {translateY: -40, opacity: 0},
          {delay: this.startDelay + (index * delayPerElement)},
          {translateY: 0, opacity: 1, duration: 500},
        ],
        easing: 'easeInOutSine'
      });
    });
  }
}
