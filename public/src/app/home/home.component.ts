import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTasks: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allTasks =[];
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

}
