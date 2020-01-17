import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks() {
    return this._http.get("/api/tasks");
  }
  
  getOneTask(task_id) {
    return this._http.get(`/api/tasks/${task_id}`)
  }

  createTask(task_from_component) {
    return this._http.post('/api/tasks', task_from_component);
  }

  editTask(task_from_component) {
    return this._http.put(`/api/tasks/${task_from_component._id}`, task_from_component)
  }
}
