import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../mock-data/hero.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  public name = signal('Terry Silver');
  public upperCase = signal(true);
  public heroes = signal(heroes);

  public toggleCase() {
    this.upperCase.update(value => !value);
  }
}
