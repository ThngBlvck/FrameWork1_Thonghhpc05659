import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
 
})
export class PageComponent {
    title = 'Lab5';
  }