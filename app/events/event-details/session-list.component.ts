import { Component, Input } from "@angular/core";

@Component({
    selector: 'session-list',
    templateUrl:'app/events/event-details/session-list.component.html'
})


export class SessionListComponent{
    @Input() sessions:any[]
}