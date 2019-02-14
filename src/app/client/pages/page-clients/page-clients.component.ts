import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  titre = 'Clients';
  label = 'Ici on kiff grave nos gentils clients';
  constructor() { }

  ngOnInit() {
  }

}
