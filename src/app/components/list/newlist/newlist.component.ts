import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Item } from '../../../../types/Item';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

@Component({
  selector: 'app-newlist',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent {

  constructor(private dialog:MatDialog) {}
  items: Item[] = [];

  addItemToList(name: string, quantity: string) {
    const item: Item = {
      name: name,
      quantity: quantity
    }

    if ((!item.quantity.includes("quantidade")) && item.quantity.trim().split(" ")[1] == undefined) {
      item.quantity = item.quantity + " unidades";
    }

    if (item.name.length >= 12) {
      item.name = item.name.substring(0, 12);
    }

    this.items.push(item);
  }

  deleteItemFromList(itemName: string) {
    this.items = this.items.filter(i => i.name != itemName);
  }

  openSaveDialog() {
    this.dialog.open(SaveDialogComponent,{data:this.items});
  }
}
