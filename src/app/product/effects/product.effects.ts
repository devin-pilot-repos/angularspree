import { map, switchMap } from 'rxjs/operators';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from './../../core/services/product.service';
import { Action } from '@ngrx/store';
import { Brand } from '../../core/models/brand';
import { Review } from '../../core/models/review';
import { RatingOption } from '../../core/models/rating_option';

@Injectable()
export class ProductEffects {
  GetAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_ALL_PRODUCTS),
    switchMap((action: any) => this.productService.getProducts(action.payload)),
    map((data: any) =>
      this.productActions.getAllProductsSuccess({ products: data })
    )
  ));

  GetAllTaxonomies$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_ALL_TAXONOMIES),
    switchMap((action: any) => this.productService.getTaxonomies()),
    map((data: any) =>
      this.productActions.getAllTaxonomiesSuccess({ taxonomies: data })
    )
  ));

  GetProductDetail$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_PRODUCT_DETAIL),
    switchMap((action: any) => this.productService.getProduct(action.payload)),
    map((product: Product) =>
      this.productActions.getProductDetailSuccess({ product })
    )
  ));

  GetRelatedProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_RELATED_PRODUCT),
    switchMap((action: any) =>
      this.productService.getRelatedProducts(action.payload)
    ),
    map((products: Product[]) =>
      this.productActions.getRelatedProductSuccess({ products })
    )
  ));

  GetProductReviews$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_PRODUCT_REVIEWS),
    switchMap<Action & { payload: string }, Observable<Array<Review>>>(action => {
      return this.productService.getProductReviews(action.payload);
    }),
    map(reviewsList =>
      this.productActions.getProductReviewsSuccess(reviewsList)
    )
  ));

  GetBrands$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_ALL_BRANDS),
    switchMap<Action, Observable<Array<Brand>>>(_ => {
      return this.productService.getBrands();
    }),
    map(brands => this.productActions.getBrandsSuccess(brands))
  ));

  WriteProductReview$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.WRITE_PRODUCT_REVIEW),
    switchMap<Action & { payload: Object }, Observable<Review>>(action => {
      return this.productService.writeProductReview(action.payload);
    }),
    map(review => this.productActions.writeProductReviewSuccess(review))
  ));

  GetProductRatingOptions$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GET_RATING_OPTIONS),
    switchMap<Action & { payload }, Observable<Array<RatingOption>>>(action => {
      return this.productService.getProductRatingOptions(action.payload);
    }),
    map(ratingOption =>
      this.productActions.getRatingsOptionsSuccess(ratingOption)
    )
  ));

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productActions: ProductActions
  ) {}
}
