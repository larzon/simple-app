import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
//import { BOARDS } from '../boards';
import { LISTS } from '../lists';
import { CARDS } from '../cards';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  public board: any;
  //board = BOARDS.find((i) => i.id === this.id);
  lists = LISTS.filter((i) => i.boardId === this.id);
  cards = CARDS.filter((i) => this.lists.filter((j) => j.id === i.listId));

  constructor(private boardService: BoardService){}

  ngOnInit() {
    this.getBoard(this.id);
  }

  public getBoard(id : number): void {
    this.boardService.getBoard(id).subscribe({
      next: (response) => {
        this.board = response;
        console.log(this.board);
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }
}
