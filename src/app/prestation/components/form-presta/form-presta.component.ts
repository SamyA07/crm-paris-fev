import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-presta',
  templateUrl: './form-presta.component.html',
  styleUrls: ['./form-presta.component.scss']
})
export class FormPrestaComponent implements OnInit {
  public form: FormGroup;
  public states = State;
  @Input() init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tauxTva: [this.init.tauxTva],
      comment: [this.init.comment],
      state: [this.init.state]
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }
}
