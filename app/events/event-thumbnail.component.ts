import {Component, Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from './shared/index'
@Component({
    selector:'event-thumbnail',
    template:
    `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2> 
            <div>Date:{{event?.date | date:'shortDate'}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                        
            Time:{{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>Price:\${{event?.price}}</div> 
            <div *ngIf="event?.location">
                <span>Location:{{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>  
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL : {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles:[`
        .bold { font-weight: bold; }
        .green { color: #003300 !important; }
        .pad-left{ margin-left:10px; }
        .thumbnail { min-height:210px; } 
        ..well div{ color: #bbb}
    `]
}) 

export class EventThumbnailComponent{
    @Input() event:IEvent

    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }
}