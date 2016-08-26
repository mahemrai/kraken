import {bootstrap} from '@angular/platform-browser-dynamic';
import {RegisterComponent} from '../register/register.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(RegisterComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);