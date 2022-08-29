import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoalsComponent } from './goals/goals.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {Menubar, MenubarModule} from 'primeng/menubar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule } from "primeng/autocomplete";
import {ToolbarModule} from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputNumberModule} from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MessagesModule} from 'primeng/messages';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GoalsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DatePipe,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MenubarModule,
    SplitButtonModule,
    DropdownModule,
    RippleModule,
    CardModule,
    AutoCompleteModule,
    ToolbarModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    InputNumberModule,
    TabViewModule,
    SelectButtonModule,
    MessagesModule,
    FileUploadModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
