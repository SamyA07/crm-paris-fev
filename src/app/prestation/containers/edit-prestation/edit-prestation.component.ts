import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  prestation$: Observable<Prestation>;
  id: string;

  constructor(
    private ps: PrestationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.prestation$ = this.ps.getPrestation(this.id);
    });
  }

  update(prestation: Prestation) {
    prestation.id = this.id;
    this.ps
      .update(prestation)
      .then(() => this.router.navigate(['prestation']));
  }
}
