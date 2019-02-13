import { Client } from 'src/app/shared/models/client.model';

export const FakeClients: Client[] = [
  new Client({
    id: 'sam1',
    name: 'Samy1',
    email: 'samy1.ameur@gmail.com',
  }),
  new Client({
    id: 'sam2',
    name: 'Samy2',
    email: 'samy2.ameur@gmail.com',
  }),
  new Client({
    id: 'sam3',
    name: 'Samy3',
    email: 'samy3.ameur@gmail.com',
  })
];
