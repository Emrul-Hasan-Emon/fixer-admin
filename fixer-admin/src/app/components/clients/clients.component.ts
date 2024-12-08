import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients = [
    { id: 1, name: 'John Doe', gender: 'Male' },
    { id: 2, name: 'Jane Smith', gender: 'Female' },
    { id: 3, name: 'Alice Johnson', gender: 'Female' },
    // ... more clients
  ];

  seeDetails(clientId: number) {
    // Logic to show client details later on
    console.log('See details for Client ID:', clientId);
  }
}
