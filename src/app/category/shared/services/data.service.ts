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

  getById(id: number) {
    return this.httpClient.get<any>('http://localhost:3000/category/api/get/' + id)
  }

  create(data: ICategory[]) {
    return this.httpClient.post<any>('http://localhost:3000/category/api/create', data)
  }

  update(id: number, data: ICategory[]) {
    return this.httpClient.post<any>('http://localhost:3000/category/api/update/' + id, data)
  }

  delete(id: number) {
    return this.httpClient.get<any>('http://localhost:3000/admin/category/api/remove/' + id)
  }
}
