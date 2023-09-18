import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsListComponent} from "./pages/forms-list/forms-list.component";
import {FormsConfigComponent} from "./pages/forms-config/forms-config.component";

const routes: Routes = [
  {path: '', component: FormsListComponent, pathMatch: "full"},
  {path: 'form', redirectTo: '', pathMatch: "full"},
  {path: 'form/:id', component: FormsConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
