import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  public name = signal('Terry Silver');
  public upperCase = signal(true);

  public toggleCase() {
    this.upperCase.update(value => !value);
  }
}
