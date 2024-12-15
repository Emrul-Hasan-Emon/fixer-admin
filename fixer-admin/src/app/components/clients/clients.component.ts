import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/clients';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}
  clients: Client[] = [];

  ngOnInit(): void {
    this.fetchAllClients();
  }

  private fetchAllClients() {
    this.clientService.getAllClients().subscribe(
      (clients: any) => {
        this.setClientsData(clients);
      },
      (err) => {
        console.error("An unexpected occured");
        // alert('Error occured while getting all client information');        
      }
    )
  }

  getFullName(client: Client): string {
    return client.first_name + ' ' + client.last_name;
  }

  private setClientsData(clients: any) {
    if (clients.message) {
      if (clients.message == 'Client Information found') {
        this.clients = clients.data;
        console.log('');
        console.log('Clients: ', this.clients);
      } else {
        this.clients = [];
      }
    }
  }

  seeDetails(client: Client) {
    this.clientService.publishClientInformation(client);
    this.router.navigate(['client-details']);
  }
}
