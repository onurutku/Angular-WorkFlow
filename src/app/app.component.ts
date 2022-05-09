import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  title = 'Practices';
  constructor() {}
  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Icons & Menu',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/icons',
      },
      {
        label: 'Forms',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/forms',
      },
      {
        label: 'Data',
        icon: 'pi pi-fw pi-car',
        routerLink: '/data',
      },
    ];
  }
}
