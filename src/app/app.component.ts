import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { path: 'popular', label: 'POPULAR'},
    { path: 'top', label: 'TOP RATED' }
  ];
}
