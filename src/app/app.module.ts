import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_BASE_URL } from '../tokens';
import { BASE_URL } from '../settings';
import { BaseUrlInterceptor } from '../interceptors/base-url.interceptor';
import { HeadersInterceptor } from '../interceptors/headers.interceptor';
import { TokenInterceptor } from '../interceptors/token.interceptor';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';

import { AppComponent } from './app.component';

import { rootReducer, IAppState } from '../redux/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    NgReduxModule,
    LoginModule
  ],
  providers: [
    { provide: APP_BASE_URL, useValue: BASE_URL },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
      rootReducer,
      {},
      [],
      storeEnhancers);
  }
}