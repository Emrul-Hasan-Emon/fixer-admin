import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/clients';
import { Task, TaskResponse } from 'src/app/models/task';
import { ClientService } from 'src/app/services/client/client.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  client: Client | undefined = undefined;
  clientTasks: Task[] = [];
  
  constructor(
    private router: Router,
    private clientService: ClientService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
      this.fetchClientDetails();
  }

  goBack() {
    this.router.navigate(['/clients']);
  }

  getFullName(client: Client): string {
    return client.first_name + ' ' + client.last_name;
  }

  private fetchClientDetails() {
    this.clientService.getPublishedClient().subscribe(
      (client: Client) => {
        this.client = client;
        this.fetchAllTasksForTheClient(this.client.client_id); 
      },
      (error) => {
        console.log(error);
        alert('An unexpected error');
      }
    )
  }

  private fetchAllTasksForTheClient(clientId: string) {
    this.taskService.getAllTasksForAClient(clientId).subscribe(
      (tasks: TaskResponse) => {
        this.clientTasks = tasks.data
      },
      (error) => {
        console.log(error);
        alert('An unexpected error occured while fetching all tasks');
      }
    )
  }

  public seeTaskDetails(task: Task) {
    this.taskService.publishTaskDetails(task);
    this.router.navigate(['task-details'])
  }
}
