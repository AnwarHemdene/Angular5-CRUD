import { Component, OnInit } from '@angular/core';

import {SujetService} from './../shared/sujet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {

  constructor( private sujetService:  SujetService) { }

  ngOnInit() {
    this.sujetService.getData();
    this.resetForm();
  }

  onSubmit(sujetForm : NgForm){
    this.sujetService.insertSujet(sujetForm.value);
    this.resetForm(sujetForm);  
  }

  resetForm(sujetForm? : NgForm){
    if(sujetForm != null)
      sujetForm.reset();
    this.sujetService.sujetSelectione = {
      $key : null,
      title: '',
      description: '',
      imgsrc: '',
    }
  }
}
