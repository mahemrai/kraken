import {Component} from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {UserNavComponent} from '../dash/user-nav.component';
import {FeedScreenComponent} from '../dash/feed-screen.component';

@Component({
    selector: 'dash-board',
    directives: [UserNavComponent, FeedScreenComponent],
    template: `
        <div class="col-xs-2 user-nav-widget">
            <user-nav></user-nav>
        </div>
        <div class="col-xs-10 feed-widget">
            <feed-screen></feed-screen>
        </div>
    `
})

export class DashboardComponent {

}