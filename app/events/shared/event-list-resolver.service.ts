import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";


@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:EventService){

    }

    resolve(){
        return this.eventService.getEvents().map(events=>events)
        //above line means that we are receiving events and then we are just returning back those events
        //we need to return this event to angular; because this is an observable
        //if we called subscribe here the value that would be returned would not be returned back
    }
}