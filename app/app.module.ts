import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {  NbLayoutModule,NbCardModule, } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms'
import { PaymentService } from './paymentService/payment.service';
import { StoreModule } from '@ngrx/store';
import  {reducer}  from './reducers/paymentReducer';
import { ToastrModule } from 'ngx-toastr';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      payment: reducer
    })
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
