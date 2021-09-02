import { Component, Input } from '@angular/core';

@Component({
  selector: 'wk-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: [ './content-section.component.scss' ]
})
export class ContentSectionComponent {

  @Input() public label: string = '';

  @Input() public title: string = '';

  @Input() public titleExtras: string[] = [];

  @Input() public texts: string[] = [];
}
