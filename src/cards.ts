export interface Card {
  id: number;
  name: string;
  description: string;
  listId: number;
}
export const CARDS: Card[] = [
  {
    id: 1,
    name: 'Card 1',
    description: 'Description 1',
    listId: 1,
  },
  {
    id: 2,
    name: 'Card 2',
    description: 'Description 2',
    listId: 1,
  },
  {
    id: 3,
    name: 'Card 3',
    description: 'Description 3',
    listId: 2,
  },
];
