import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ICategory } from '../shared/interface/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  catgories: ICategory[] = []
  @Output() childEvent = new EventEmitter<ICategory[]>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe((e) => {
      this.catgories = e.data;
    });
  }

  updateDataTable() {
    this.dataService.getAll().subscribe((e) => {
      this.catgories = e.data;
    });
  }

  getDataRow(id: number) {
    this.dataService.getById(id).subscribe((e) => {
      this.childEvent.emit(e.data);
    });
  }
}
