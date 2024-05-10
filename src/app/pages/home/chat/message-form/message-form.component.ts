import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
})
export class MessageFormComponent {
  private fb = inject(NonNullableFormBuilder);
  public form = this.fb.group({
    message: ['', [Validators.required]],
  });

  public onSubmit(): void {
    const { value } = this.form;
    console.log(value.message);
  }
}
