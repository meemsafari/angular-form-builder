import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertComponent} from "./components/alert/alert.component";
import {ConfirmModalComponent} from "./components/confirm-modal/confirm-modal.component";
import {FormService} from "./services/form.service";
import {FormConfigService} from "./services/form-config.service";
import {FormsListComponent} from "./pages/forms-list/forms-list.component";
import {FormsConfigComponent} from "./pages/forms-config/forms-config.component";
import {FieldConfigurationFormComponent} from "./components/field-configuration-form/field-configuration-form.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ConfirmModalComponent,
    FormsListComponent,
    FormsConfigComponent,
    FieldConfigurationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrModule.forRoot(),
    FormService,
    FormConfigService
  ],
  exports: [
    ConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
