import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.css']
})
export class FullnameComponent implements OnInit {

  fname: string
  lname:string
  fullname: string
  constructor() {
    this.fname ="Krishna Kumar"
    this.lname="Parakkat"
    this.fullname = this.fname + this.lname
   }

  ngOnInit() {
  }

}
