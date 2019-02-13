import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
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
