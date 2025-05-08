import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
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

@NgModule()
export class Ng2UiAuthModule {
  static forRoot(configOptions?: IPartialConfigOptions, defaultJwtInterceptor?: boolean): ModuleWithProviders<Ng2UiAuthModule> {
    return {
      ngModule: Ng2UiAuthModule,
      providers: []
    };
  }
}

export class AuthService {
  constructor(private http: HttpClient) {}
  
  login(user: any, url?: string): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  signup(user: any, url?: string): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  logout(url?: string): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  authenticate(name: string, userData?: any): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  link(name: string, userData?: any): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  unlink(provider: string, url?: string): Observable<any> { 
    return new Observable(observer => {
      observer.next({});
      observer.complete();
    });
  }
  
  isAuthenticated(): boolean { return false; }
  getToken(): string { return ''; }
  getPayload(): any { return null; }
  setToken(token: string): void {}
  removeToken(): void {}
  setStorageType(type: string): void {}
  getExpirationDate(): Date { return new Date(); }
}
