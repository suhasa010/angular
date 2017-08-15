import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{myInput}}</h1>`,
})
export class AppComponent  { name = 'World123'; myInput = '<input ng-model="myInput"/>'}
