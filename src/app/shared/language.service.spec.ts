import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, Languages } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateSpy }
      ]
    });

    service = TestBed.inject(LanguageService);
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should switch language and update current language', () => {
    const language: Languages = 'en_US';

    service.switchLanguage(language);

    expect(translateService.use).toHaveBeenCalledWith(language);
    expect(service.currentLanguage).toEqual(language);
  });

  it('should not switch to unsupported language', () => {
    const unsupportedLanguage: Languages | string = 'fr_FR';
    const currentLanguage = service.currentLanguage;

    service.switchLanguage(unsupportedLanguage as Languages);

    expect(translateService.use).not.toHaveBeenCalled();
    expect(service.currentLanguage).toEqual(currentLanguage);
  });
});
