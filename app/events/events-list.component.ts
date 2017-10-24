import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: 
    `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
         <!-- whenever you receive an input event (eventClick) from other component fire event handleEventClicked($event) in your 
         component $(event) is the data emitted along with out event, you can only pass a single value with event so if you want 
         to pass multiple values with event wrap them into an object -->
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
    handleEventClicked(data){
        console.log('received: ', data.name);
    }
}