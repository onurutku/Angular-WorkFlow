import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsComponent } from './icons/icons.component';
import { MenuModule } from 'primeng/menu'; // add this import
import { MegaMenuModule } from 'primeng/megamenu'; // add this import
import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './forms/forms.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { DataComponent } from './data/data.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [AppComponent, IconsComponent, FormsComponent, DataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    MenubarModule,
    ColorPickerModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
