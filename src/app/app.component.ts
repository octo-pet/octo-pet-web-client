import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element selector <app-root></app-root>
  // selector: '[app-root]', // attribute selector <div app-root></div>
  // selector: '.app-root', // class selector <div class=app-root></div>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Octo Pet';
}
