import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { CardListComponent } from './components/card-list/card-list.component';

import { UnitsService } from './services/units/units.service';
import { FilterService } from './services/filter/filter.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    SubtitleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UnitsService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
