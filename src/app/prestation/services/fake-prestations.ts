import { Prestation } from 'src/app/shared/models/prestation.model';

export const FakePrestations: Prestation[] = [
  new Prestation({
    id: 'frfere',
    typePresta: 'Formation',
    client: 'Capgemini',
    tjmHt: 3000,
    nbJours: 25,
    comment: 'Merci Cap pour ces 25j à 3k,'
  }),
  new Prestation({
    id: 'azda',
    typePresta: 'Lead Dev',
    client: 'Atos',
    tjmHt: 3500,
    nbJours: 20,
    comment: 'Merci atos pour ces 20j à 3.5k,'
  }),
  new Prestation({
    id: 'uikuu',
    typePresta: 'Tech Management',
    client: 'Edf',
    tjmHt: 4000,
    nbJours: 30,
    comment: 'Merci Edf pour ces 30j à 4k,'
  })
];
