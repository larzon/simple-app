import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { BoardComponent } from './board/board.component';
import { BoardsComponent } from './boards/boards.component';
import { AddListComponent } from './add-list/add-list.component';
import { AddCardComponent } from './add-card/add-card.component';

const routes: Routes = [
  { path: '', component: BoardsComponent },
  { path: 'add-board', component: AddBoardComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'add-list/:boardId', component: AddListComponent },
  { path: 'add-card/:listId', component: AddCardComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
