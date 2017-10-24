import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: 
    `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent{
    event1 = {
        id:1,
        name:"Angular Connect",
        date:'7/09/2100',
        time:'10:AM',
        price:599.99,
        imageUrl:'/app/assets/images/angularconnect-shield.png',
        location:{
            address:'Deer Hall Of residence',
            city:'Itanagar',
            state:'Arunchal Pradesh',
            country:'India'
        }
    }
}