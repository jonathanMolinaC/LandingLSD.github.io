import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  @Input() videoId : string="";

  constructor() { }

  ngOnInit(): void {
    console.log("BUENO{{this.videoId}}");
  }

}
