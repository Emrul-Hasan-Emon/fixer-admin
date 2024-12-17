import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TaskResponse } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllTasksDetails();
  }

  private fetchAllTasksDetails() {
    this.taskService.getAllTasks().subscribe(
      (taskResponse: TaskResponse) => {
        if (taskResponse.data) {
          this.tasks = taskResponse.data;
        }
      },
      (error) => {
        console.log(error);
        alert('An error occured')
      }
    )
  }

  public seeTaskDetails(task: Task) {
    this.taskService.publishTaskDetails(task);
    this.router.navigate(['task-details'])
  }
}
