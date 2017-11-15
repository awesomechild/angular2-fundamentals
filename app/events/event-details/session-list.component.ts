import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'session-list',
    templateUrl:'app/events/event-details/session-list.component.html',
    styles:['collapsible-well h6 {margin-top:-5px; margin-bottom:10px;}'],
})


export class SessionListComponent implements OnChanges{
    @Input() sessions:any[];
    @Input() filterBy: string;
    @Input() sortBy:string;
    visibleSessions: any[] = [];

    ngOnChanges() {
        if(this.sessions){
            //if session is not set we dont want to do anything else we will filter sessions according to the following rule
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc); 
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

function sortByNameAsc(s1:any, s2:any){
    if (s1.name > s2.name ) return 1;
    else if(s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: any, s2:any){
    return -1*(s1.voters.length-s2.voters.length);
}

