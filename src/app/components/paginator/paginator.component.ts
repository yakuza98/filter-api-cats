import {Component, EventEmitter, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Output() changePagination: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  changePage($event: PageEvent) {
    this.changePagination.emit($event)
  }
}
