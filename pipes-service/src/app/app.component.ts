import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<h1>Aulas de Service. </h1>
   <app-card></app-card> 
  <router-outlet></router-outlet>`,
  /*templateUrl: './app.component.html',*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-service';
}
