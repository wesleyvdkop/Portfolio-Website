import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedFieldComponent } from './animated-field/animated-field.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { HeaderComponent } from './header/header.component';
import { WorkSectionComponent } from './work-section/work-section.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    AnimatedFieldComponent,
    ContentSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent
  ],
  exports: [
    HeaderComponent,
    ContentSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent
  ]
})
export class ModulesModule {

}
