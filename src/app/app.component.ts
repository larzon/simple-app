import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BoardsComponent } from '../boards/boards.component';
import { AddBoardComponent } from '../add-board/add-board.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BoardsComponent, AddBoardComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
