import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ListData } from '../../../../types/List';
import { ListService } from '../../../services/list.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-all-lists',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatListModule],
  templateUrl: './all-lists.component.html',
  styleUrl: './all-lists.component.css'
})
export class AllListsComponent implements OnInit{
  constructor(private userService:UserService, private listService:ListService) {}
  lists: ListData[] = [];

  listControl = new FormControl<ListData | null>(null, Validators.required)
  ngOnInit(): void {
    const token = this.userService.getToken();

    token.subscribe(t => {
      this.findAll(t).subscribe(response => {
        this.lists = response;
      });
    });
  }

  findAll(token:string | null) {
    return this.listService.findAll(token);
  }
}
