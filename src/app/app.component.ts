import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateConvertPipe } from './experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayFlag: boolean = false;
  data: any;
  currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd");
  constructor(private datePipe: DatePipe,private convertPipe:DateConvertPipe){}
  ngOnInit(): void {
    this.createForm();
  }
  maxDate = new Date();
  title = 'datepicker';
  registrationForm: FormGroup;
  createForm(){
    this.registrationForm = new FormGroup({
      date: new FormControl('',Validators.required),
    })
  }
  get date(){
    return this.registrationForm.get('date');
  }
  onSave(){
    this.data = this.datePipe.transform( this.registrationForm.value['date'],"yyyy-MM-dd");
    this.displayFlag = true; 
  }
}
