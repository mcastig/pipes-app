import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {
  public localeService = inject(LocaleService);
  public currentLocale = signal(inject(LOCALE_ID));
  public nameLower = signal('Nemesis');
  public nameUpper = signal('NEMESIS');
  public fullName = signal('nEmEsIs NeMeSiS');
  public customDate = signal(new Date());

  public tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });

  public changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }
}
