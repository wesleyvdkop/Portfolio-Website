import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageService } from './language.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LanguageService
  ]
})
export class SharedModule {

}
