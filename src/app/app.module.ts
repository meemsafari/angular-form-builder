import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FormConfigService} from "./services/form-config.service";

import {AppComponent} from './app.component';
import {FormsListComponent} from './pages/forms-list/forms-list.component';
import {FormsConfigComponent} from './pages/forms-config/forms-config.component';
import {
    FieldConfigurationFormComponent
} from './components/field-configuration-form/field-configuration-form.component';
import {AlertComponent} from './components/alert/alert.component';

import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';
import { FormViewComponent } from './pages/form-view/form-view.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsListComponent,
        FormsConfigComponent,
        FieldConfigurationFormComponent,
        AlertComponent,
        ConfirmModalComponent,
        FormViewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
    ],
    exports: [
        ConfirmModalComponent
    ],
    providers: [
        FormConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
