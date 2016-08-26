"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const register_component_1 = require('../register/register.component');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(register_component_1.RegisterComponent, [http_1.HTTP_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=bootstrap.js.map