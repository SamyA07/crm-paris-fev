import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TableauComponent } from './containers/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective, TemplatesModule],
  imports: [CommonModule, TemplatesModule]
})
export class SharedModule {}
