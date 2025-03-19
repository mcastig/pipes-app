import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localES from '@angular/common/locales/es-MX';
import localFR from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localES, 'es');
registerLocaleData(localFR, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    }
  ]
};
