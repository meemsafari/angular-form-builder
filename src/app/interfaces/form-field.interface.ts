type FieldType =
    | 'string'
    | 'number'
    | 'date'
    | 'select'
    | 'description';

export interface FormField {
    id: string;
    label: string;
    type: FieldType;
    required: boolean;
    accessLevel: 'edit' | 'view';
    options?: string[];
    maxLength?: number;
    min?: number;
    max?: number;
}
