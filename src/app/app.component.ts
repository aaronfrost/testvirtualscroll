import { Component } from '@angular/core';

@Component({
  selector: 'af-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <af-list></af-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'af works!';
}
