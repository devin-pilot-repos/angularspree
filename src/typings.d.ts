/* SystemJS module definition */
// declare var module: {
//   id: string;
// };
declare var StripeCheckout: any;

declare module 'ng2-ui-auth/lib/ng2-ui-auth.module' {
  import { ModuleWithProviders } from '@angular/core';
  export class Ng2UiAuthModule {
    static forRoot(configOptions?: any, defaultJwtInterceptor?: boolean): ModuleWithProviders<Ng2UiAuthModule>;
  }
}

declare module '@ngx-progressbar/core/lib/ng-progress.module' {
  import { ModuleWithProviders } from '@angular/core';
  export class NgProgressModule {
    static forRoot(config?: any): ModuleWithProviders<NgProgressModule>;
  }
}

declare module '@ngx-progressbar/http/lib/ng-progress-http.module' {
  import { ModuleWithProviders } from '@angular/core';
  export class NgProgressHttpModule {
    static forRoot(config?: any): ModuleWithProviders<NgProgressHttpModule>;
  }
}

declare module 'ng-lazyload-image/src/lazyload-image.module' {
  import { ModuleWithProviders } from '@angular/core';
  export class LazyLoadImageModule {
    static forRoot(options: any): ModuleWithProviders<LazyLoadImageModule>;
  }
}
