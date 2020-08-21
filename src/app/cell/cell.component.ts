import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
data:any;
url='www.google.com/search?q=';
  constructor() { }

  agInit(params){
  this.data=params.value;
}
  ngOnInit(): void {
  }

}
