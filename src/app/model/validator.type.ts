import { AbstractControl, ValidationErrors } from "@angular/forms";

export type Validator<T> = (control: AbstractControl<T>) => ValidationErrors | null; 