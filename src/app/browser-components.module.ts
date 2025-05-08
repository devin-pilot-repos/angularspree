import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    CommonModule,
    NgxJsonLdModule,
    LoadingBarModule,
    LoadingBarHttpClientModule
  ],
  exports: [
    NgxJsonLdModule,
    LoadingBarModule
  ]
})
export class BrowserComponentsModule { }
