import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { UnitsService } from './services/units/units.service';
import { FilterService } from './services/filter/filter.service';
import { FooterComponent } from './components/footer/footer.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent
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
