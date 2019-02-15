import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // tslint:disable-next-line:variable-name
  private _collection: Observable<Prestation[]>;
  public detail$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // this.collection = FakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // compacter way to write it but more difficult to understand
      // map(data => data.map(prestation => new Prestation(prestation)) )
      map(data => {
        this.detail$.next(data[0]);
        return data.map(prestation => {
          return new Prestation(prestation);
        });
      })
    );
    // this.collection = this.http
    //   .get<Prestation[]>(`${API_URL}/prestation`)
    //   .pipe(map(data => data.map(prestation => new Prestation(prestation))));
  }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this._collection;
  }
  // set collection
  public set collection(collection: Observable<Prestation[]>) {
    this._collection = collection;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post(`${API_URL}/prestation`, item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.put(`${API_URL}/prestation/$(item.id)`);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`${API_URL}/prestation/$(item.id)`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestation/${id}`);
  }
}
