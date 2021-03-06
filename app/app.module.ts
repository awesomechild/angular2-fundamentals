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
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'
import { EventsAppComponent} from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { Error404Component } from "./errors/404.component"
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTriggerDirective, CollapsibleWellComponent, SimpleModalComponent, JQ_TOKEN, TOASTR_TOKEN, Toastr } from './common/index';


declare let toastr : any
declare let jQuery: Object;

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective

    ],
    bootstrap: [EventsAppComponent],
    providers:[
        EventService,
        { provide: JQ_TOKEN, useValue: jQuery},
        { provide: TOASTR_TOKEN, useValue: toastr }, 
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