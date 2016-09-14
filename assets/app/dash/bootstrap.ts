import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {DashboardComponent} from '../dash/dashboard.component';
import {UserNavComponent} from '../dash/user-nav.component';
import {FeedScreenComponent} from '../dash/feed-screen.component';

bootstrap(DashboardComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);
//bootstrap(UserNavComponent, [HTTP_PROVIDERS]);
//bootstrap(FeedScreenComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);