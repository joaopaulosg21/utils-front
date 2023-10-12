import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { ListService } from 'src/app/services/list.service';
import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/types/Item.interface';
import { List } from 'src/app/types/List.interface';

@Component({
  selector: 'app-listas-usuario',
  templateUrl: './listas-usuario.component.html',
  styleUrls: ['./listas-usuario.component.css']
})
export class ListasUsuarioComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<Item>;
  constructor(private listService: ListService, private userService:UserService,
    private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.findAll();
  }

  lists!: List[];

  findAll() {
    this.userService.getToken().subscribe((token:any) => {
      this.listService.findAllUser(token).subscribe((data:any) => {
        this.lists = data;
      })
    });
  }

  displayedColumns: string[] = ["name", "quantity"];

  dataSource: Item[] = [];
  panelOpenState = false;
  viewList(id: string) {
    const lista: List = this.lists.filter(item => item.id == id)[0];
    this.dataSource = lista.items;
  }

  change(name: string) {
    this.dataSource.filter(item => item.name === name).map(item => item.status = !item.status);
  }

  deleteTable(tableId:string) {
    const value = window.confirm();
    if(value) {
      this.userService.getToken().subscribe((token:any) => {
        this.listService.deleteById(tableId,token).subscribe((data:any) => {
          this.matSnackBar.open("Lista deletada com sucesso","",{duration:2000});
          this.ngOnInit();
        });
      });
    }
  }
}
