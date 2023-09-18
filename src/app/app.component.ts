import {Component, ViewChild} from '@angular/core';
import {ToastContainerDirective} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer!: ToastContainerDirective;
  title = 'Angular Form Builder';
  subTitle = 'You can create different fields for each form here and save it.';
}
