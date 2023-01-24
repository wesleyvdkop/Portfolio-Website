import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { forEach } from 'lodash';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'wk-animated-field',
  templateUrl: './animated-field.component.html',
  styleUrls: ['./animated-field.component.scss']
})

export class AnimatedFieldComponent implements AfterViewInit {

  @ViewChild('scene', {static: true})
  private scene!: ElementRef;

  public ngAfterViewInit() {
    const paths = this.scene.nativeElement.children;

    forEach(paths, child => {
      setTimeout(() => {
        anime({
          targets: child,
          duration: anime.random(3000, 5000),
          easing: 'easeInOutSine',
          d: child.getAttribute('pathdata:id'),
          loop: true,
          direction: 'alternate'
        });
      }, anime.random(0, 1000));
    });
  }
}
