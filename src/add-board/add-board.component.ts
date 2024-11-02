import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BOARDS } from '../boards';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-board.component.html',
})
export class AddBoardComponent {
  name = new FormControl('', Validators.required);
  router = inject(Router);

  constructor(private boardService: BoardService){}

  addBoard() {
    let name = this.name.value ?? '';

    if (this.name.valid) {
      let ids = BOARDS.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newBoard = {
        id: maxId + 1,
        name: name,
      };
      BOARDS.unshift(newBoard);
      this.boardService.addBoard(newBoard).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          alert(error.message);
        }
      });
      this.name.reset();
      this.router.navigateByUrl('/');
    }
  }
}
