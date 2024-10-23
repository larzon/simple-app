import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { BoardComponent } from './board/board.component';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  { path: '', component: BoardsComponent },
  { path: 'add-board', component: AddBoardComponent },
  { path: 'board/:id', component: BoardComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
