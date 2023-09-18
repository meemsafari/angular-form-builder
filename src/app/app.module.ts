import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertComponent} from "./components/alert/alert.component";
import {ConfirmModalComponent} from "./components/confirm-modal/confirm-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
