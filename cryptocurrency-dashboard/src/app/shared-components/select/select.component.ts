import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  public toppings = new FormControl();
  public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  @Input() options: string[] | undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
