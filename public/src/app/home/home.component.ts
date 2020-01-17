import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTasks: any;
  newTask: any;
  wrong: boolean;
  editing: string;
  taskToEdit: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.wrong = false;
    this.editing = '';
    this.allTasks =[];
    this.taskToEdit = { _id: "", title: "", description: "" };
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }

  getTasksFromService() {
    let obs = this._httpService.getTasks();
    obs.subscribe((data: any) => {
      this.allTasks = data.results;
    })
  }

  getDetails(task) {
    console.log(task);
  }

  createTask(taskToCreate) {
    console.log(taskToCreate)
    let obs = this._httpService.createTask(taskToCreate);
    obs.subscribe((data: any) => {
      if(data.message == "success") {
        this.wrong = false;
        this.getTasksFromService();
        this.newTask = { title: "", description: "" };
      } else {
        this.wrong = true;
      }
    })
  }

  editTask(task) {
    let obs = this._httpService.editTask(task);
    obs.subscribe((data:any)=> {
      if(data.message == "success") {
        this.wrong = false;
        this.getTasksFromService();
        this.taskToEdit = { title: "", description: "" };
        this.editing = '';
      } else { 
        console.log(data);
        this.wrong = true;
      }
    })
  }

  letsCreate() {
    this.taskToEdit = { title: "", description: "" };
    this.editing = '';
  }
  letsEdit(task) {
    this.taskToEdit = task;
    this.editing = task._id;
  }
}
