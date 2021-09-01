import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedFieldComponent } from './animated-field/animated-field.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    AnimatedFieldComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class ModulesModule {

}
