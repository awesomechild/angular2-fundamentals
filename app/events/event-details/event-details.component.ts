import { Component } from "@angular/core"
import { EventService } from "../shared/event.service"
import { ActivatedRoute } from "@angular/router"
import { IEvent } from '../shared/index'


@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles:[
        `
            .container{ padding-left:20px; padding-right:20px; }
            .event-image{ height:100px; }
            a{cursor: pointer}
        `
    ]
}) 

export class EventDetailsComponent {
    event:IEvent
    addMode : boolean
    filterBy: string = "all"
    constructor(private eventService: EventService, private route: ActivatedRoute ) {

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
    addSession(){
        this.addMode = true
    }
    saveNewSession(session: any){
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false //so that you get back to sessions page
    }
    cancelAddSession(){
        this.addMode = false
    }
}