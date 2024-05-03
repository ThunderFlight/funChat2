import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { UserReducer } from './user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    BrowserModule,
    importProvidersFrom(StoreModule.forRoot({ users: UserReducer })),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
