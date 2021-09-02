import { Component } from '@angular/core';

@Component({
  selector: 'wk-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: [ './contact-section.component.scss' ]
})
export class ContactSectionComponent {

  public socialmedia = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/wesley-van-der-kop'
    },
    {
      name: 'Github',
      link: 'https://github.com/wesleyvdkop'
    },
    {
      name: 'Stack Overflow',
      link: 'https://stackoverflow.com/users/7063364/wesley-van-der-kop'
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com/wesleyvdkop'
    }
  ];
}
