import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'session-list',
    templateUrl:'app/events/event-details/session-list.component.html',
    styles:['collapsible-well h6 {margin-top:-5px; margin-bottom:10px;}'],
})


export class SessionListComponent implements OnChanges{
    @Input() sessions:any[];
    @Input() filterBy: string;
    visibleSessions: any[] = [];

    ngOnChanges() {
        if(this.sessions){
            //if session is not set we dont want to do anything else we will filter sessions according to the following rule
            this.filterSessions(this.filterBy);
        }
    }
    filterSessions(filter){
        if(filter === 'all'){
            //we want to make a copy not copy the reference and the easiest way to do that is using slice(0)
            this.visibleSessions = this.sessions.slice(0);
        }else{
            //using javascript's filter function
            this.visibleSessions = this.sessions.filter(session => {
                // what is LocaleLowerCase() and why does it matter; also firefox is giving a weired error TypeError: event.target.hasAttribute is not a function[Learn More]
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

}