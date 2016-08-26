"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const login_component_1 = require('../login/login.component');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(login_component_1.LoginComponent, [http_1.HTTP_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=bootstrap.js.map