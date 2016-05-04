import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
//import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

import {HttpUtils} from './core/utils/HttpUtils';

import {App} from './components/app/app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthConfig, {
      useFactory: () => {
        return new AuthConfig({
          noJwtError: false
      });
    }}),
    AuthHttp,
    HttpUtils,
    //provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
