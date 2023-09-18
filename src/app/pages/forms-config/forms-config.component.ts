import {Component, Inject, ViewChild, PLATFORM_ID} from '@angular/core';
import {FormField} from "../../interfaces/form-field.interface";
import {FormConfigService} from "../../services/form-config.service";
import {FormService} from "../../services/form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {v4 as uuidv4} from "uuid";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import {ConfirmModalComponent} from "../../components/confirm-modal/confirm-modal.component";
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'app-forms-config',
    templateUrl: './forms-config.component.html',
    styleUrls: ['./forms-config.component.scss']
})
export class FormsConfigComponent {
    @ViewChild(ConfirmModalComponent) public confirmModal!: ConfirmModalComponent;
    formFields: FormField[] = [];
    selectedField: FormField | null = null;
    pageState:string = "add";
    formAccessLevel:string = "view";
    formName:string = "";

    constructor(private formConfigService: FormConfigService,
                private formService: FormService,
                private route: ActivatedRoute,
                private toastService: ToastrService,
                @Inject(PLATFORM_ID) private platformId: Object,
                private titleService: Title,
                private router: Router) {
    }

    ngOnInit() {

        this.route.paramMap.subscribe(event => {
            this.pageState = event.get('id') ?? 'add';
        });

        if (this.pageState != "add") {
            const selectedForm = this.formService.getSelectedForm(this.pageState);
            if (selectedForm) {
                this.formAccessLevel = selectedForm.accessLevel;
                this.formName = selectedForm.name;
                this.formConfigService.setFormConfig(selectedForm.fieldItems);
                this.formFields = this.formConfigService.getFormConfig() ?? [];
            }
            this.titleService.setTitle('Edit Form | Angular Form Builder');
        } else {
            this.formConfigService.clearFormFields();
            this.titleService.setTitle('Add Form | Angular Form Builder');
        }
    }

    addField() {
        this.selectedField = {
            id: '',
            label: '',
            type: 'string',
            required: false,
            accessLevel: 'edit'
        };
    }

    editField(field: FormField) {
        this.selectedField = {...field};
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }

    deleteField(id: string) {
        this.formConfigService.deleteFormField(id);
        this.formFields = this.formConfigService.getFormConfig();
    }

    saveField(field: FormField) {
        if (field.id) {
            const index = this.formFields.findIndex(f => f.id === field.id);
            if (index !== -1) {
                this.formFields[index] = field;
            }
        } else {
            field.id = uuidv4();
            this.formFields.push(field);
        }
        this.selectedField = null;
        this.formConfigService.setFormConfig(this.formFields);
    }

    saveForm() {
        if (this.formFields && this.formFields.length > 0) {
            if (this.pageState == "add") {
                this.formService.createForm(this.formFields, this.formAccessLevel, this.formName);
            } else {
                const savedFormFields = localStorage.getItem('formFields');
                if (savedFormFields) {
                    this.formFields = JSON.parse(savedFormFields);
                    this.formService.updateForm(this.pageState, this.formFields, this.formAccessLevel, this.formName);
                }
            }
            this.router.navigateByUrl("/form");
        }
    }

    confirmDelete(item:any) {
        this.confirmModal.item = item;
        this.confirmModal.confirmOpenModal();
    }

    cancelFieldEdit() {
        this.selectedField = null;
    }

}
