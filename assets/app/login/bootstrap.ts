import {bootstrap} from '@angular/platform-browser-dynamic';
import {LoginComponent} from '../login/login.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(LoginComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);