import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Board } from '../boards';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent implements OnInit {
  public boards: Board[] = [];
  //boards = BOARDS;

  constructor(private boardService: BoardService){}

  ngOnInit() {
    this.getBoards();
  }

  public getBoards(): void {
    this.boardService.getBoards().subscribe({
      next: (response) => {
        this.boards = response.reverse();
        console.log(this.boards);
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }
}
