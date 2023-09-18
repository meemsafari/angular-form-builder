import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormField} from '../../interfaces/form-field.interface';

@Component({
    selector: 'app-field-configuration-form',
    templateUrl: './field-configuration-form.component.html',
})
export class FieldConfigurationFormComponent implements OnInit {
    @Input() field: FormField = {
        id: '',
        label: '',
        type: 'string',
        required: false,
        accessLevel: 'edit',
        min: 0,
        max: -1,
        maxLength: 255,
        options: []
    };
    @Output() fieldSaved: EventEmitter<FormField> = new EventEmitter<FormField>();
    @Output() fieldCanceled: EventEmitter<void> = new EventEmitter<void>();
    isNewField = true;

    fieldForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.isNewField = !this.field.id;

        this.fieldForm = this.formBuilder.group({
            label: [this.field.label, [Validators.required]],
            type: [this.field.type, [Validators.required]],
            accessLevel: [this.field.accessLevel, [Validators.required]],
            required: [this.field.required],
            min: [this.field.min],
            max: [this.field.max],
            maxLength: [this.field.maxLength],
            options: [this.field.options]
        });
    }

    saveFieldConfig() {
        if (this.fieldForm.valid) {
            const updatedField: FormField = {
                id: this.field.id,
                label: this.fieldForm.get('label')?.value,
                type: this.fieldForm.get('type')?.value,
                accessLevel: this.fieldForm.get('accessLevel')?.value,
                required: this.fieldForm.get('required')?.value,
                min: this.fieldForm.get('min')?.value,
                max: this.fieldForm.get('max')?.value,
                maxLength: this.fieldForm.get('maxLength')?.value,
                options: this.fieldForm.get('options')?.value ? this.fieldForm.get('options')?.value.split(',') : []
            };
            this.fieldSaved.emit(updatedField);
        }
    }

    cancelFieldEdit() {
        this.fieldCanceled.emit();
    }
}
