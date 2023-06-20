import {Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {ApiService} from "../../core/services/api.service";
import {Store} from "@ngxs/store";
import {GetBreedsAction, GetSelectedAction, SetPaginationAction} from "../../store/actions";
import {getQuery} from "../../core/helpers/helpers";
import {IBreeds, ICardValue, ISelectedBreeds, ISelectEvent} from "../../shared/interfaces/interfaces";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cardValue: ICardValue = {
    options: []
  };
  breeds!: Observable<IBreeds[]>;
  cards: ISelectedBreeds[] | [] = [];

  constructor(
    private http: ApiService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetBreedsAction());
    this.initSubs();
  }

  initSubs(): void {
    this.store.select((state) => state.cats.breeds).pipe(take(1))
      .subscribe((breeds: Observable<IBreeds[]>) => {
        this.breeds = breeds;
      });
  }

  getImages(): void {
    this.store.select((state) => state.cats.selectedBreeds).pipe(take(1))
      .subscribe((selectedBreeds: ISelectedBreeds[]) => {
        this.cards = selectedBreeds;
      });
  }

  selectChange = (event: ISelectEvent): void => {
    this.cardValue.options = [...event.data];

    this.store.dispatch(new GetSelectedAction(getQuery(this.cardValue.options))).pipe(
      take(1)
    ).subscribe((data) => {
      this.getImages();
    });
  };

  changePagination($event: PageEvent): void {
    this.store.dispatch(new SetPaginationAction($event));

    this.store.dispatch(new GetSelectedAction(getQuery(this.cardValue.options))).pipe(
      take(1)
    ).subscribe((data) => {
      this.getImages();
    })
  }
}
