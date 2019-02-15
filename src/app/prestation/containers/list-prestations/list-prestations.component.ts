import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  public labelLink = 'Add prestation';
  // private sub: Subscription;

  constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.collection$ = this.ps.collection;
    // this.sub = this.ps.collection.subscribe(data => {
    //   this.collection = data;
    // });
    this.headers = [
      'type',
      'client',
      'nb jours',
      'tjm ht',
      'total ht',
      'total ttc',
      'state',
      'edit'
    ];
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
