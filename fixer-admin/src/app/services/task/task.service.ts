import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task, TaskResponse } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    public taskDetails =  new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient
  ) { }

  public getAllTasksForAClient(clientId: string): Observable<TaskResponse> {
    const payload = {
      client_id: clientId
    };
    return this.http.post<TaskResponse>(this.getURLForClientTasks(), payload);
  }

  public getAllTasks(): Observable<TaskResponse> {
    return this.http.get<TaskResponse>('/admin/task/all-tasks-details');
  }

  public publishTaskDetails(taskDetails: Task) {
    this.taskDetails.next(taskDetails);
  }

  public getPublishedTaskDetails(): Observable<Task> {
    return this.taskDetails.asObservable();
  }

  private getURLForClientTasks() {
    return '/admin/task/client-tasks'
  }
}
