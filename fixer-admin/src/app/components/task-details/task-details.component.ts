import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  task: Task | undefined = undefined;
  
  constructor(private taskService: TaskService) {}

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

}
