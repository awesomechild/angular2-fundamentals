import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:
    `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2> 
            <div>Date:{{event?.date}}</div>
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
    // ? is the safe navigation tool that will not throw an error if that object is undefined, it will show its place but
    // will not show the value of the key
    @Input() event:any

    getStartTimeClass(){
        // METHOD 1 of returning objects to ngClass
        // const isEarlyStart = this.event && this.event.time === '8:00 am'
        // return {green: isEarlyStart, bold: isEarlyStart}

        // METHOD 2 using string literal, return the names of the classes you would like to add seperated by spaces
        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold'
        // return ''
        // you will have to set the return type of this method to ensure typescripts type safety 

        // METHOD3 using arrays
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }
}