import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:
    `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2> 
            <div>Date:{{event?.date}}</div>
            <div>Time:{{event?.time}}</div>
            <div>Price:\${{event?.price}}</div> 
            
            <div [hidden]="!event?.location">
                <span>Location:{{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>  
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL : {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles:[`
        .pad-left{ margin-left:10px; }
        .thumbnail { min-height:210px; } 
        ..well div{ color: #bbb}
    `]
}) 

export class EventThumbnailComponent{
    // ? is the safe navigation tool that will not throw an error if that object is undefined, it will show its place but
    // will not show the value of the key
    @Input() event:any

}