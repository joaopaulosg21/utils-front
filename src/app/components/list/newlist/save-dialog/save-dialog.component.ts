import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Item } from '../../../../../types/Item';
import { createList } from '../../../../../types/CreateList';
import { ListService } from '../../../../services/list.service';
import { UserService } from '../../../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './save-dialog.component.html',
  styleUrl: './save-dialog.component.css'
})
export class SaveDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item[], private listService: ListService,
    private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  saveList(listName: string) {
    const newList: createList = {
      name: listName,
      items: this.data
    };

    this.userService.getToken().subscribe(token => {
      const response = this.listService.createList(newList, token);
      response.subscribe(data => {
        this.snackBar.open("Lista " + listName + " adicionada com sucesso", undefined, { duration: 2000 });
      })
    })

  }
}
