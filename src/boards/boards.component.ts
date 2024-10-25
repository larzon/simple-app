import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BOARDS } from '../boards';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent {
  boards = BOARDS;
  router = inject(Router);

  navigate() {
    this.router.navigateByUrl('/add-board');
  }
}
