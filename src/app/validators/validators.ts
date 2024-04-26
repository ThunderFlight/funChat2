import { AbstractControl } from "@angular/forms"
import { Validator } from "../model/validator.type"

export function passwordValidator(message: string): Validator<string> {
  return (control: AbstractControl<string>) => {
    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    return regExp.test(control.value) ? null : { message }
  }
}
