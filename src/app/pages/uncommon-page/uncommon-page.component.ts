import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canadá'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  public client = signal(client1);
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient() {
    if(this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18n Plural
  public clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  public clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  public deleteClient() {
    this.clients.update( prev => prev.slice(1));
  }
}
