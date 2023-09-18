import {Component, OnInit, ViewChild} from '@angular/core';
import {FormService} from "../../services/form.service";
import {Form} from "../../interfaces/form.interface";
import {ConfirmModalComponent} from "../../components/confirm-modal/confirm-modal.component";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-forms-list',
    templateUrl: './forms-list.component.html'
})
export class FormsListComponent implements OnInit {
    @ViewChild(ConfirmModalComponent) public confirmModal!: ConfirmModalComponent;
    forms: Form[] = [];

    constructor(private formService: FormService,
                private titleService: Title) {}

    ngOnInit() {
        this.forms = this.formService.getForms();
        this.titleService.setTitle('Forms List | Angular Form Builder');
    }

    confirmDelete(item:Form) {
        this.confirmModal.item = item;
        this.confirmModal.confirmOpenModal();
    }

    deleteForm(item:Form) {
        this.formService.deleteForm(item);
        this.forms = this.formService.getForms();
    }
}
