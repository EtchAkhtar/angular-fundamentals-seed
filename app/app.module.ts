import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule,
    CommonModule,
    // custom
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}