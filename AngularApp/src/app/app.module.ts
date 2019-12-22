import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTableModule } from "@pascalhonegger/ng-datatable";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SecureSongListComponent } from './secure-song-list/secure-song-list.component';
import { SecureSongReviewComponent } from './secure-song-review/secure-song-review.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SecureSongListComponent,
    SecureSongReviewComponent,
    AdminHomepageComponent,
    ActivateAccountComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    FormsModule
  ],
  providers: [AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
