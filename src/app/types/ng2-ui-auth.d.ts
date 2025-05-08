declare module 'ng2-ui-auth' {
  import { ModuleWithProviders, Provider } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  export interface IPartialConfigOptions {
    providers?: { [provider: string]: any };
    defaultHeaders?: { [header: string]: string };
    tokenRoot?: string;
    tokenName?: string;
    tokenPrefix?: string;
    tokenHeader?: string;
    tokenType?: string;
    loginUrl?: string;
    signupUrl?: string;
    unlinkUrl?: string;
    refreshUrl?: string;
    baseUrl?: string;
    loginRedirect?: string;
    logoutRedirect?: string;
    signupRedirect?: string;
    storageType?: string;
    storageKey?: string;
    defaultUrlParams?: string[];
    cordova?: boolean;
    resolveToken?: (response: any, config: any) => string;
    withCredentials?: boolean;
    platform?: string;
    responseType?: string;
  }

  export class Ng2UiAuthModule {
    static forRoot(configOptions?: IPartialConfigOptions, defaultJwtInterceptor?: boolean): ModuleWithProviders<Ng2UiAuthModule>;
  }

  export class AuthService {
    constructor(http: HttpClient);
    login(user: any, url?: string): Observable<any>;
    signup(user: any, url?: string): Observable<any>;
    logout(url?: string): Observable<any>;
    authenticate(name: string, userData?: any): Observable<any>;
    link(name: string, userData?: any): Observable<any>;
    unlink(provider: string, url?: string): Observable<any>;
    isAuthenticated(): boolean;
    getToken(): string;
    getPayload(): any;
    setToken(token: string): void;
    removeToken(): void;
    setStorageType(type: string): void;
    getExpirationDate(): Date;
  }
}
