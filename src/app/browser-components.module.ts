import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxJsonLdModule,
    NgProgressModule,
    NgProgressHttpModule,
    RouterModule
  ],
  exports: [
    NgxJsonLdModule,
    NgProgressModule,
    RouterModule
  ]
})
export class BrowserComponentsModule { }
