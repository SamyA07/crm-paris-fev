import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

@NgModule({
  declarations: [PageClientsComponent, ClientComponent, ListClientsComponent, PageAddClientComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule]
})
export class ClientModule {}
