import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menuItems = [
    {
      icon: 'Welcome',
      title: 'Welcome Page',
      route: 'welcome',
      description: 'Manage and view all registered clients'
    },
    { 
      icon: 'users',
      title: 'Clients',
      route: 'clients',
      description: 'Manage and view all registered clients'
    },
    {
      icon: 'user-plus',
      title: 'New Fixers',
      route: 'new-fixers',
      description: 'Review new fixer registration requests'
    },
    {
      icon: 'user-check',
      title: 'Approved Fixers',
      route: 'approved-fixers',
      description: 'View all approved fixers'
    },
    {
      icon: 'clipboard-list',
      title: 'Tasks',
      route: 'tasks',
      description: 'Monitor and manage all tasks'
    }
  ];

  selectedMenu = this.menuItems[0];

  selectMenu(menu: any) {
    this.selectedMenu = menu;
  }
}
