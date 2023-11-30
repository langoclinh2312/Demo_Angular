import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private objectSource = new BehaviorSubject<any>(null);
  object$ = this.objectSource.asObservable();

  sendObject(obj: any): void {
    this.objectSource.next(obj);
  }
}
