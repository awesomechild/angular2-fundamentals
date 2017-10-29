import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import{
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import { EventsAppComponent} from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService} from "./common/toastr.service"
import { appRoutes } from './routes'
import { Error404Component } from "./errors/404.component"
import { AuthService } from './user/auth.service';


@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component

    ],
    bootstrap: [EventsAppComponent],
    providers:[
        EventService,
        ToastrService, 
        EventRouteActivator,
        AuthService,
        {
            provide:'canDeactivateCreateEvent',
            useValue:checkDirtyState
        },
        EventListResolver
    ]
})

export class AppModule{

}


function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('you have not saved this event, do you want to proceed')
    return true
}