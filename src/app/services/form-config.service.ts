import { Injectable } from '@angular/core';
import { FormField } from '../interfaces/form-field.interface';

@Injectable({
    providedIn: 'root'
})
export class FormConfigService {
    private formFields: FormField[] = [];

    constructor() {
        this.formFields = this.getFormConfig();
    }

    getFormConfig(): FormField[] {
        return JSON.parse(localStorage.getItem('formFields') ?? '[]');
    }

    clearFormFields() {
        localStorage.removeItem("formFields");
    }

    deleteFormField(fieldId: string): void {
        const index = this.formFields.findIndex(f => f.id === fieldId);
        if (index !== -1) {
            this.formFields.splice(index, 1);
            this.saveToLocalStorage();
        }
    }

    setFormConfig(formConfig: FormField[]): void {
        this.formFields = formConfig;
        this.saveToLocalStorage();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('formFields', JSON.stringify(this.formFields));
    }
}
