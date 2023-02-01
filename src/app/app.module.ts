import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { alarm, alarmFill, alignBottom,personCircle,cart2 } from 'ngx-bootstrap-icons';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CartsComponent } from './pages/carts/carts.component';

const icons = {
  alarm,
  alarmFill,
  alignBottom,
  personCircle,
  cart2
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StoresComponent,
    LoginComponent,
    CartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
    PagesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
