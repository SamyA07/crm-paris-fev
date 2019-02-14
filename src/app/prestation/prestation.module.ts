import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent
  ],
  imports: [CommonModule, PrestationRoutingModule, SharedModule]
})
export class PrestationModule {}
