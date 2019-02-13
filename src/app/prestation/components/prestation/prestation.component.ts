import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  // public states = Object.values(State);
  public states = State;
  @Input() prestation: Prestation;

  constructor(private ps: PrestationService) {}

  ngOnInit() {
  }

  public changeState(prestation, event) {
    const state = event.target.value;
    this.ps.update(prestation, state);
  }
}
