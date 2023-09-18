import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsListComponent} from "./pages/forms-list/forms-list.component";
import {FormsConfigComponent} from "./pages/forms-config/forms-config.component";
import {FormViewComponent} from "./pages/form-view/form-view.component";

const routes: Routes = [
    {path: '', component: FormsListComponent, pathMatch: "full"},
    {path: 'form', redirectTo: '', pathMatch: "full"},
    {path: 'form/:id', component: FormsConfigComponent},
    {path: 'form/:id/view', component: FormViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
