import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BOARDS } from '../boards';
import { LISTS } from '../lists';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  board = BOARDS.find((i) => i.id === this.id);
  lists = LISTS.filter((i) => i.boardId === this.id);
}
