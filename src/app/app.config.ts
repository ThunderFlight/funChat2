import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot({ count: counterReducer })),
  ],
};
