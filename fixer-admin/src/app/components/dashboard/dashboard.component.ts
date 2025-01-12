import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

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
    },
    {
      icon: 'clipboard-list',
      title: 'Category',
      route: 'category',
      description: 'Monitor and manage Categories'
    },
    {
      icon: 'clipboard-list',
      title: 'Location',
      route: 'location',
      description: 'Monitor and manage Locations'
    }
  ];

  selectedMenu = this.menuItems[0];

  selectMenu(menu: any) {
    console.log('menu: ', menu);
    
    this.selectedMenu = menu;
    this.router.navigate([menu.route]);
  }
}
