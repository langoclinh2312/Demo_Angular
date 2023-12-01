import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategory } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  buttonSubject: Subject<any> = new Subject();
  buttonObservable = this.buttonSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any>('http://localhost:3000/category/api/get')
  }

  create(data: ICategory[]) {
    return this.httpClient.post<any>('http://localhost:3000/category/api/create', data)
  }

  getById(id: number) {
    return this.httpClient.get<any>('http://localhost:3000/category/api/get/' + id)
  }

}
