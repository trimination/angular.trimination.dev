import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { FriendlyDirNamePipe } from './pipes/friendly-dir-name.pipe';
import { FriendlyFileNamePipe } from './pipes/friendly-file-name.pipe';
import { FooterComponent } from './footer/footer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CookieConfirmComponent } from './cookie-confirm/cookie-confirm.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageComponent,
    FriendlyDirNamePipe,
    FriendlyFileNamePipe,
    FooterComponent,
    SafeHtmlPipe,
    CookieConfirmComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [FriendlyDirNamePipe, FriendlyFileNamePipe, SafeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
