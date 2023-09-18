import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsListComponent} from "./pages/forms-list/forms-list.component";

const routes: Routes = [
  {path: '', component: FormsListComponent, pathMatch: "full"},
  {path: 'form', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
