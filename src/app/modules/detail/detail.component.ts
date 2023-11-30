import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  receivedDatas: any[] = [];
  constructor(public formDataService: DataService) { }

  ngOnInit() {
    this.formDataService.object$.subscribe(data => {
      this.receivedDatas = data;
    });
  }

}
