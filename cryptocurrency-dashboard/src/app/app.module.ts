import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './shared-components/autocomplete/autocomplete.component';
import { ChartComponent } from './components/chart/chart.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { PromoComponent } from './components/promo/promo.component';
import { SelectComponent } from './shared-components/select/select.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PromoComponent,
    CurrencyDetailsComponent,
    HomeComponent,
    DashboardComponent,
    AutocompleteComponent,
    SelectComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    NguCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
