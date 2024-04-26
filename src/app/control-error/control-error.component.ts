import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

// import { BadImplementationExeption } from '../../errors/bad-implementation.error'

@Component({
  selector: 'app-control-error',
  standalone: true,
  imports: [],
  templateUrl: './control-error.component.html',
  styleUrl: './control-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit, OnDestroy {
  private readonly form = inject(ControlContainer);

  public control = input.required<string>();

  public error$ = signal<string>('');
  private readonly destroy$ = new Subject();

  public ngOnInit(): void {
    const control = this.form.control?.get(this.control());

    if (!control) {
      throw new Error(
        `control with name ${this.control()} does not exists in form`,
      );
    }

    control.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (control.dirty && control.errors) {
        const errors = Object.entries(control.errors).at(0);

        if (Array.isArray(errors)) {
          if (errors[0] === 'required') {
            this.error$.set('This field sould not be empty');
            return;
          }

          this.error$.set(errors[1]);
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next([]);
    this.destroy$.complete();
  }
}
