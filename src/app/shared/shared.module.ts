import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';
import { AddRowComponent } from './components/add-row/add-row.component';
import { LinksComponent } from './components/links/links.component';
import { TableauComponent } from './containers/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
    LinksComponent
  ],
  exports: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    TemplatesModule,
    AddRowComponent,
    LinksComponent,
    FontAwesomeModule
  ],
  imports: [CommonModule, TemplatesModule, RouterModule]
})
export class SharedModule {}
