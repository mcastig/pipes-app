import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../mock-data/hero.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe],
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
