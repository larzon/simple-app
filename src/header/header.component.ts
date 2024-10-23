import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: '<h1>{{ title }}</h1>',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Simple App';
}
