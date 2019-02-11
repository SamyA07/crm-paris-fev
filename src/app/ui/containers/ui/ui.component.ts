import { Component, OnInit } from '@angular/core';
import { CoderbaseUiService } from '@coderbase/ui';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor(private uiService: CoderbaseUiService) { }

  ngOnInit() {
  }

}
