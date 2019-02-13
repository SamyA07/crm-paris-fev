import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauComponent } from './containers/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
