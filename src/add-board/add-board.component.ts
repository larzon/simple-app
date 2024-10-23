import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { BOARDS } from '../boards';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-board.component.html',
  styleUrl: './add-board.component.css',
})
export class AddBoardComponent {
  title = new FormControl('', Validators.required);
  router = inject(Router);

  addBoard() {
    let title = this.title.value ?? '';

    if (this.title.valid) {
      let ids = BOARDS.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newBoard = {
        id: maxId + 1,
        title: title,
      };
      BOARDS.unshift(newBoard);
      this.title.reset();
      this.router.navigateByUrl('/');
    }
  }
}
