import {FormField} from "./form-field.interface";

export interface Form {
    id: string;
    name: string;
    accessLevel: string;
    fieldItems: FormField[];
}
