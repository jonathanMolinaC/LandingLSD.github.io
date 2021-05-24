import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-esection',
  templateUrl: './esection.component.html',
  styleUrls: ['./esection.component.css']
})
export class ESectionComponent implements OnInit {
  

  public mostrar1: boolean=false;
  public mostrar2: boolean=false;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
