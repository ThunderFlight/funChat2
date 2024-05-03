import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChatServiceService } from '../chat-service.service';
import { AutheticationUser } from '../model/userAunthetication';
import { Router } from '@angular/router';
import { passwordValidator } from '../validators/validators';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule, ControlErrorComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  // gr3at@3wdsG
  private router = inject(Router);
  private fb = inject(NonNullableFormBuilder);
  private authenticationService = inject(ChatServiceService);
  public form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [passwordValidator('wrong password'), Validators.required]],
  });
  public isFormValid$ = toSignal(
    this.form.statusChanges.pipe(map(() => this.form.valid)),
  );

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    const { value } = this.form;

    this.authenticationService
      .authenticateUser(`${value.username}`, `${value.password}`)
      .subscribe((event) => {
        if (event?.payload.user?.isLogined) {
          this.router.navigateByUrl('home/');
        }
      });
  }
}
