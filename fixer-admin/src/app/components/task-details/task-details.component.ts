import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  task: Task | undefined = undefined;
  
  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchTaskDetails();
  }

  private fetchTaskDetails() {
    this.taskService.getPublishedTaskDetails().subscribe(
      (details: Task) => {
        this.task = details;
      },
      (error) => {
        console.log(error);
        alert('An unexpected error occured while fetching task details');
      }
    )
  }

  public deleteTask(taskId: string) {
    const confirmed = window.confirm("Are you sure you want to delete this Task?");
    if (confirmed) {
      this.taskService.deleteTask(taskId).subscribe(
        (resp: any) => {
          this.router.navigate(['task']);
        },
        (error) => {
          console.log(error);
          alert('An unexpected error occured while deleting task details');
        }
      )
    }
  }
}
