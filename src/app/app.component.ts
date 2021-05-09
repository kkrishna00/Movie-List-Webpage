import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: 'home',
      home: true,
    },
    {
      title: 'MoviesList',
      icon: 'film-outline',
      link: '/movieListPage',
    },
    {
      title: 'BookMark',
      icon: 'star',
      link: '/Bookmark',
    },
  ];
  constructor(private readonly sidebarService: NbSidebarService) {}
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
