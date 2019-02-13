import { Component, Input, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public states = StateClient;
  @Input() client: Client;

  constructor(private cs: ClientService) {}

  ngOnInit() {
  }

  public changeState(client, event) {
    const state = event.target.value;
    this.cs.update(client, state);
  }
}
