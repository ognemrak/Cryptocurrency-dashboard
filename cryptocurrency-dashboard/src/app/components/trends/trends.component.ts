import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
