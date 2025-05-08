import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';
import { RandomPipe } from './pipes/random.pipe';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { InnerIproductComponent } from './components/product-slider/inner-product/inner-product.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchBarModule } from './components/search-bar/search-bar.module';

import { ZoomableDirective } from './directives/zoomable.directive';
import { SavedAddressComponent } from './components/saved-address/saved-address.component';
import { ReversePipe } from '../core/pipes/reverse.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

@NgModule({
  declarations: [
    KeysPipe,
    HumanizePipe,
    ReversePipe,
    SanitizeHtmlPipe,
    RandomPipe,
    ZoomableDirective,
    ProductSliderComponent,
    InnerIproductComponent,
    SavedAddressComponent,
    BreadcrumbsComponent
  ],
  exports: [
    CommonModule,
    BsDropdownModule,
    RatingModule,
    TypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    NgxJsonLdModule,
    KeysPipe,
    HumanizePipe,
    ReversePipe,
    SanitizeHtmlPipe,
    RandomPipe,
    ZoomableDirective,
    ProductSliderComponent,
    SavedAddressComponent,
    CarouselModule,
    BreadcrumbsComponent,
    LazyLoadImageModule,
    SearchBarModule,
    RouterModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    RatingModule.forRoot(),
    RouterModule,
    NgxInputStarRatingModule,
    CarouselModule.forRoot(),
    NgxJsonLdModule,
    LazyLoadImageModule,
    SearchBarModule
  ]
})
export class SharedModule {}
