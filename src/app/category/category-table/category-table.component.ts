import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ICategory } from '../shared/interface/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  @Input() catgories : ICategory[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllDatable();
  }

  getAllDatable() {
    this.dataService.getAll().subscribe((e) => {
      this.catgories = e.data;
    });
  }

  deleteCategory(id: number) {
    this.dataService.delete(id).subscribe((e) => {
      this.getAllDatable();
    });
  }
}
