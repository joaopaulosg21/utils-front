import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ListService } from 'src/app/services/list.service';
import { Item } from 'src/app/types/Item.interface';
import { List } from 'src/app/types/List.interface';

@Component({
  selector: 'app-listas-publicas',
  templateUrl: './listas-publicas.component.html',
  styleUrls: ['./listas-publicas.component.css']
})
export class ListasPublicasComponent implements OnInit{
  @ViewChild(MatTable) table!: MatTable<Item>;
  constructor(private listService:ListService){}

  ngOnInit(): void {
    this.findAll();
  }

  lists!:List[];

  findAll() {
    this.listService.findAllPublic().subscribe((data:any) => {
      this.lists = data;
    });
  }

  displayedColumns:string[] = ["name","quantity"];

  dataSource:Item[] = [];
  panelOpenState = false;
  viewList(id:string) {
    const lista:List = this.lists.filter(item => item.id == id)[0];
    this.dataSource = lista.items;
  }

  change(name:string) {
    this.dataSource.filter(item => item.name === name).map(item => item.status = !item.status)
  }
}
