import { AppPreloadingStrategy } from './app_preloading_strategy';
import { myAuthConfig } from './oauth_config';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BrowserComponentsModule } from './browser-components.module';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { LayoutModule } from './layout/index';
import { CoreModule } from './core/index';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducers';
import { CheckoutLayoutModule } from './layout/checkout/checkout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddressService } from './checkout/address/services/address.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy,
      initialNavigation: 'enabledBlocking'
    }),
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-spree' }),
    CommonModule,
    FormsModule,
    LayoutModule,
    CheckoutLayoutModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    NgxJsonLdModule,
    BrowserComponentsModule,
    Ng2UiAuthModule.forRoot(myAuthConfig),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [AppPreloadingStrategy, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
