import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
  <app-appheader></app-appheader>
  <app-appmenu></app-appmenu>
  <router-outlet></router-outlet>
  <app-appfooter></app-appfooter>
  <app-appsetting></app-appsetting>
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
