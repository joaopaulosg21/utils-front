import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { ListService } from 'src/app/services/list.service';
import { UserService } from 'src/app/services/user.service';
import { CreateList } from 'src/app/types/CreateList.interface';
import { Item } from 'src/app/types/Item.interface';

@Component({
  selector: 'app-registrar-lista',
  templateUrl: './registrar-lista.component.html',
  styleUrls: ['./registrar-lista.component.css']
})
export class RegistrarListaComponent {
  @ViewChild(MatTable) table!: MatTable<Item>;
  constructor(private listService:ListService, private userService:UserService,
    private snackBar:MatSnackBar){}

  displayedColumns:string[] = ["name","quantity"];

  dataSource:Item[] = [];

  isPublic:boolean = false;

  addItem(item:Item) {
    this.dataSource.push(item);
    this.table.renderRows();
    console.log(this.dataSource)
  }

  removeItem() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  saveList(listName:string) {
    const data:CreateList = {
      name:listName,
      items:this.dataSource,
      isPublic:true
    }
    this.userService.getToken().subscribe((token:any) => {
        this.listService.createList(data,token).subscribe((data:any) => {
          this.snackBar.open("Lista " + data.name + " adicionada","",{duration:2000});
        });
    });
  }

  changeIsPublic() {
    this.isPublic = !this.isPublic;
  }
}
