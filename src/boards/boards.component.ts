import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Board, BOARDS } from '../boards';
import { BoardService } from '../board.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent implements OnInit {
  boards = BOARDS;
  //TODO: replace previous line with the following to test with backend
  //public boards: Board[] = [];

  constructor(private boardService: BoardService){}

  ngOnInit() {
    this.getBoards();
  }

  public getBoards(): void {
    //TODO: uncomment the following code to test with backend
    /*
    this.boardService.getBoards().subscribe({
      next: (response) => {
        this.boards = response;
        console.log(this.boards);
      },
      error: (error) => {
        alert(error.message);
      }
    });
    */
  }
}
