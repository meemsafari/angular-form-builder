import {Injectable} from '@angular/core';
import {Form} from "../interfaces/form.interface";
import {FormField} from "../interfaces/form-field.interface";
import {v4 as uuidv4} from "uuid";
import {ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class FormService {

    private forms: Form[] = [];

    constructor(private toastr: ToastrService) {
        this.setForms();
    }

    getSelectedForm(id: string): Form | undefined {
        return this.forms.find(e => e.id == id);
    }

    createForm(fieldItems: FormField[], accessLevel: string, name: string) {
        const newForm = {id: uuidv4(), name, accessLevel, fieldItems};
        this.forms.push(newForm);
        this.toastr.success('Created!');
        this.saveToLocalStorage();
    }

    updateForm(id: string, fieldItems: FormField[], accessLevel: string, name: string) {
        this.forms.map(e => {
            if (e.id == id) {
                e.fieldItems = fieldItems;
                e.accessLevel = accessLevel;
                e.name = name;
            }
        });
        this.toastr.success('Updated!');
        this.saveToLocalStorage();
    }

    deleteForm(item: Form): void {
        const index = this.forms.findIndex(f => f.id === item.id);
        if (index !== -1) {
            this.forms.splice(index, 1);
            this.saveToLocalStorage();
            this.toastr.success('Deleted!');
        }
    }

    getForms(): Form[] {
        return JSON.parse(localStorage.getItem('forms') ?? '[]');
    }

    private setForms() {
        this.forms = this.getForms();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('forms', JSON.stringify(this.forms));
    }
}
