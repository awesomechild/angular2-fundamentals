import {Component, Input} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:
    `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2> 
            <div>Date:{{event.date}}</div>
            <div>Date:{{event.time}}</div>
            <div>Date:\${{event.price}}</div> 
            <div>
                <span>Location:{{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>  
            </div>
        </div>
    `
}) 

export class EventThumbnailComponent{
    @Input() event:any
    // this input decorator tells Angular that this event will be passed in from another component; "Not to be confused with javascript event"

}