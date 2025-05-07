import { ApplySearchParams } from './../actions/search.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchActionTypes } from '../actions/search.actions';
import { switchMap, map } from 'rxjs/operators';
import { SearchingService } from '../../services';
import { SearchResponse } from '../../models/search-param';
import * as actions from './../actions';
import { Observable } from 'rxjs';

@Injectable()
export class SearchEffects {
  appliedSearchParams$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActionTypes.ApplySearchParams),
    switchMap<ApplySearchParams, Observable<SearchResponse>>(action => {
      const params = this.searchService.convertToAPISearchParams(
        action.payload
      );
      return this.searchService.search(params);
    }),
    map(resp => new actions.LoadedSearchResults(resp))
  ));

  constructor(
    private actions$: Actions,
    private searchService: SearchingService
  ) {}
}
