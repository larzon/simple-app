import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CARDS } from '../cards';
import { LISTS } from '../lists';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-card.component.html',
})
export class AddCardComponent {
  addCardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
  });
  activeRoute = inject(ActivatedRoute);
  listId = Number(this.activeRoute.snapshot.paramMap.get('listId'));
  boardId = LISTS.find((i) => i.id === this.listId)?.boardId;
  router = inject(Router);

  backToBoard() {
    this.router.navigateByUrl('/board/' + this.boardId);
  }

  addCard() {
    let name = this.addCardForm.value.name ?? '';
    let description = this.addCardForm.value.description ?? '';

    if (this.addCardForm.valid) {
      let ids = CARDS.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newCard = {
        id: maxId + 1,
        name: name,
        description: description,
        listId: this.listId,
      };
      CARDS.push(newCard);
      this.addCardForm.reset();
      this.router.navigateByUrl('/board/' + this.boardId);
    }
  }
}
