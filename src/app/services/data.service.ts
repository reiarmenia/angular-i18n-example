import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private testDataSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public readonly testData$: Observable<string | undefined> = this.testDataSubject.asObservable();

  constructor() { }

  updateTestData(newValue: string): void {
    this.testDataSubject.next(newValue);
  }

  loadLocalStorage(): void {
    const val = localStorage.getItem('persistStoretestData') ?? this.testDataSubject.getValue();
    this.testDataSubject.next(val);
  }

  saveLocalStorage(): void {
    const current = this.testDataSubject.getValue();
    console.log('current', current);
    localStorage.setItem('persistStoretestData', current ?? '');
  }




}
