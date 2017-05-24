import {Component} from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>{{hero.name}} detail</h2>
  <div> id:<label for="">{{hero.id}}</label></div>
  <div> name:<input type="text" [(ngModel)]="hero.name"/></div>
  <div><h1>{{hero.name}}</h1></div>

  `


})


export class AppComponent {
  title = 'app works!';
  hero: Hero = {
    id: 1,
    name: 'dst'
  };
}
