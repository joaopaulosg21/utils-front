import { Routes } from '@angular/router';
import { AllListsComponent } from './components/list/all-lists/all-lists.component';
import { NewlistComponent } from './components/list/newlist/newlist.component';

export const routes: Routes = [
    {component:AllListsComponent,path:"list/all"},
    {component:NewlistComponent,path:"list/new"}
];
