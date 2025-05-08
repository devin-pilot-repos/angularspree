import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutHeaderComponent } from '../checkout-header/checkout-header.component';
import { CheckoutFooterComponent } from '../checkout-footer/checkout-footer.component';

@NgModule({
  declarations: [
    CheckoutHeaderComponent,
    CheckoutFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CheckoutHeaderComponent,
    CheckoutFooterComponent
  ]
})
export class CheckoutLayoutModule { }
