import { Component, OnInit } from '@angular/core';
import { ICategory } from './shared/interface/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currenCatgories: ICategory[] = []

  constructor() { }

  ngOnInit() {
  }

  getDataChild(event: ICategory[]) {
    this.currenCatgories = event
  }
}
