import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";


@Injectable()
export class EventListResolver{
    constructor(private eventService:EventService){

    }

    resolve(){
        return this.eventService.getEvents().map(events=>events)
        //above line means that we are receiving events and then we are just returning back those events
    }
}