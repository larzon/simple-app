import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { LISTS } from '../lists';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-list.component.html',
})
export class AddListComponent {
  name = new FormControl('', Validators.required);
  activeRoute = inject(ActivatedRoute);
  boardId = Number(this.activeRoute.snapshot.paramMap.get('boardId'));
  router = inject(Router);

  backToBoard() {
    this.router.navigateByUrl('/board/' + this.boardId);
  }

  addList() {
    let name = this.name.value ?? '';

    if (this.name.valid) {
      let ids = LISTS.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newList = {
        id: maxId + 1,
        name: name,
        boardId: this.boardId,
      };
      LISTS.push(newList);
      this.name.reset();
      this.router.navigateByUrl('/board/' + this.boardId);
    }
  }
}
