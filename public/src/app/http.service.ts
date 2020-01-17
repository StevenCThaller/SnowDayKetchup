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
}
