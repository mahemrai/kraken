"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const http_1 = require('@angular/http');
const forms_1 = require('@angular/forms');
const user_nav_component_1 = require('../dash/user-nav.component');
const feed_screen_component_1 = require('../dash/feed-screen.component');
platform_browser_dynamic_1.bootstrap(user_nav_component_1.UserNavComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(feed_screen_component_1.FeedScreenComponent, [http_1.HTTP_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=bootstrap.js.map