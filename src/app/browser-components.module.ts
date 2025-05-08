import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxJsonLdModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    RouterModule
  ],
  exports: [
    NgxJsonLdModule,
    LoadingBarModule,
    RouterModule
  ]
})
export class BrowserComponentsModule { }
