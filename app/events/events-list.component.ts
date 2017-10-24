import { Component } from '@angular/core'

@Component({
    selector: 'events-list',

    // templateUrl is always relative to the root of the applcation and the root of the application is 
    // wherever our index.html file is that loads our application and we actually could do something to make this
    // relative to the component , which is really nice, but we're not prepared to do that yet, we'll talk 
    // about that when we talk about building for a production
    
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent{
    event = {
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