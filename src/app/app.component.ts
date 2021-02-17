import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

  testControl = this.fb.control([]);


  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.dataService.loadLocalStorage();
    this.dataService.testData$.subscribe(data => {
      console.log('testData', data);
      this.testControl.setValue(data);
    });
  }

  ngOnDestroy(): void {
    this.dataService.saveLocalStorage();
  }

  save(): void {
    console.log('testControlValue', this.testControl.value);
    this.dataService.updateTestData(this.testControl.value);
    this.dataService.saveLocalStorage();
  }

}
