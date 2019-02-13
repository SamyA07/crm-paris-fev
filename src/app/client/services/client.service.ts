import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FakeClients } from './fake-clients';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // tslint:disable-next-line:variable-name
  private _collection: Client[];

  constructor() {
      this.collection = FakeClients;
  }

  // get collection
  public get collection(): Client[] {
    return this._collection;
  }
  // set collection
  public set collection(collection: Client[]) {
    this._collection = collection;
  }

  // update item in collection
public update(client: Client, state: StateClient) {
  client.state = state;
}

  // add item in collection

  // delete item in collection

  // get item by id
}
