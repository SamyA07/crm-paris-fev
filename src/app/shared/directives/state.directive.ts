import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { StateClient } from '../enums/state-client.enum';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State | StateClient;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State | StateClient): string {
    return `state-${state
      .normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()}`;
  }
}
// Option => state-option
// Annulé => state-annule
// Confirmé => state-confirme
// Actif => state-actif
// Inactif => state-inactif

// binder l'attr class de l'élément host avec ce string (the td in our case)
