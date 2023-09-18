import {Component} from '@angular/core';
import {FormField} from "../../interfaces/form-field.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../../services/form.service";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-form-view',
    templateUrl: './form-view.component.html'
})
export class FormViewComponent {

    formId: string = '';
    formAccessLevel: string | undefined = 'view';
    formConfig: FormField[] = [];
    form: FormGroup = new FormGroup({});

    constructor(
        private route: ActivatedRoute,
        private formService: FormService,
        private titleService: Title,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.formId = params['id'];
            if (this.formId) {
                const selectedForm = this.formService.getSelectedForm(this.formId);
                this.formAccessLevel = selectedForm?.accessLevel;
                this.formConfig = selectedForm?.fieldItems ?? [];
                this.form = this.createForm(this.formConfig);
                this.titleService.setTitle('View form | Angular form builder')
            }
        });
    }

    createForm(formConfig: FormField[]): FormGroup {
        const formControls: { [key: string]: any } = {};

        for (const field of formConfig) {
            formControls[field.id] = [
                {value: '', disabled: field.accessLevel == 'view'},
                field.required ? Validators.required : null
            ];
        }

        return this.formBuilder.group(formControls);
    }

    isFieldInvalid(fieldId: string) {
        const control = this.form.get(fieldId);
        return control && control.invalid && (control.dirty || control.touched);
    }

    submitForm() {
        if (this.form.valid) {
            this.toastr.success('Form is valid!');
        } else {
            this.markAllControlsAsTouched(this.form);
        }
    }

    private markAllControlsAsTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            if (control instanceof FormGroup) {
                this.markAllControlsAsTouched(control);
            } else {
                control.markAsTouched();
            }
        });
    }

}
