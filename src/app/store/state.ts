import { Injectable } from '@angular/core';
import {Action, State, StateContext, Store} from '@ngxs/store';
import {env} from "../../env/env";
import {firstValueFrom, mergeMap, take} from "rxjs";
import {ApiService} from "../core/services/api.service";
import {GetBreedsAction, GetSelectedAction, SetPaginationAction} from "./actions";
import {PageEvent} from "@angular/material/paginator";


@State<any>({
  name: 'cats',
  defaults: {
    pagination: {
      pageSize: 10,
      pageIndex: 0,
    }
  }
})
@Injectable()
export class CatsState {
  constructor(
    private http: ApiService,
    private store: Store
  ) {
  }

  @Action(GetBreedsAction)
  getBreeds(ctx: StateContext<any>) {
    const state = ctx.getState();
      ctx.setState({
        ...state,
        breeds: this.http.get(`${env.api}${env.breeds}`).pipe(take(1))
      });
  }

  @Action(SetPaginationAction)
  setPaginationAction(ctx: StateContext<any>, payload: {
    pagination: PageEvent
  }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      pagination: payload.pagination
    });
  }

  @Action(GetSelectedAction)
  async getSelectedAction(ctx: StateContext<any>, payload: {query: string}) {
    const state = ctx.getState();

    const selectedBreeds = await firstValueFrom(this.store.select((stote) => stote.cats.pagination).pipe((
      mergeMap((pagination: PageEvent) => {
        return this.http.get(`${env.api}${env.images}`, {
          breed_ids: payload.query,
          limit: pagination.pageSize.toString(),
          page: pagination.pageIndex.toString(),
        })
      })
    ), take(1)));

    ctx.setState({
      ...state,
      selectedBreeds,
    });
  }
}
