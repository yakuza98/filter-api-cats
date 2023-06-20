import {Component, Input} from '@angular/core';
import {ISelectedBreeds} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() card!: ISelectedBreeds;
}
