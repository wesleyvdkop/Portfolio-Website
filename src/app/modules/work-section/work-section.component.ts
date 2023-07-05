import { Component } from '@angular/core';

@Component({
  selector: 'wk-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {
  public hover = false;

  /**
   * Every job by name, link, translationKeyTitle, translationKeyTime
   */
  public jobs = [
    {
      name: 'Essent',
      link: 'https://essent.nl',
      translationKeyTitle: 'ESSENT.TITLE',
      translationKeyTime: 'ESSENT.TIME'
    },
    {
      name: 'Everbridge',
      link: 'https://everbridge.com',
      translationKeyTitle: 'EVERBRIDGE.TITLE',
      translationKeyTime: 'EVERBRIDGE.TIME'
    },
    {
      name: 'Digital Stamp',
      link: 'https://wesleyvanderkop.nl',
      translationKeyTitle: 'DIGITAL_STAMP.TITLE',
      translationKeyTime: 'DIGITAL_STAMP.TIME'
    },
    {
      name: 'Respond',
      link: 'https://respond.nl',
      translationKeyTitle: 'RESPOND.TITLE',
      translationKeyTime: 'RESPOND.TIME'
    },
    {
      name: 'Mediamonks',
      link: 'https://mediamonks.com',
      translationKeyTitle: 'MEDIAMONKS.TITLE',
      translationKeyTime: 'MEDIAMONKS.TIME'
    }
  ];

  /**
   * Every project by name, link
   */
  // public projects = [
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   }
  // ];
}
