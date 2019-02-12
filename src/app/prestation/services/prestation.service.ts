import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { FakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  // tslint:disable-next-line:variable-name
  private _collection: Prestation[];

  constructor() {
    this.collection = FakePrestations;
   }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }
  // set collection
  public set collection(collection: Prestation[]) {
    this._collection = collection;
  }
  // add item in collection

  // delete item in collection

  // get item by id
}
