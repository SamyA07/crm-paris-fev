import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  // public states = Object.values(State);
  public states = State;
  public faEdit = faEdit;
  @Input() prestation: Prestation;
  @ViewChild('first') elem: ElementRef;

  constructor(
    private ps: PrestationService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {}

  public changeState(event) {
    const state = event.target.value;
    this.ps
      .update(this.prestation, state)
      .then(data => (this.prestation.state = state));
  }

  public getDetail() {
    console.log(this.elem.nativeElement);
    this.renderer.addClass(this.elem.nativeElement, 'active');
    this.ps.detail$.next(this.prestation);
  }

  goToDetail() {
    this.router.navigate(['prestation/edit', this.prestation.id]);
  }
}
