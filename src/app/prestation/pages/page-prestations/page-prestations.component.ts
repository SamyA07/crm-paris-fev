import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  titre = 'Prestations';
  listLinks = [
    { route: 'detail', label: 'Détail' },
    { route: 'comment', label: 'Commentaire' }
  ];
  constructor() {}

  ngOnInit() {}
}
