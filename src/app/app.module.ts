import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MultiselectAutocompleteComponent} from "./components/multiselect-autocomplete/multiselect-autocomplete.component";
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {NgxsModule} from "@ngxs/store";
import {CatsState} from "./store/state";
import {env} from "../env/env";

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MultiselectAutocompleteComponent,
    CardComponent,
    PaginatorComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([CatsState], {
      developmentMode: !env.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
