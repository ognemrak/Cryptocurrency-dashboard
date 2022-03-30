import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  public approveSubmit(): void {
    
  }
}
