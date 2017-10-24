// this is the module that does the bootstrapping of the first element
// module has a decorator of @NgModule


import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent} from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'


@NgModule({
    imports:[BrowserModule],
    //components have to registered in the modules therefore we do this
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
    //now bootstrap the EventsAppComponent here
    bootstrap: [EventsAppComponent]
    // create a ts file now that we can load from our index.html that will do our initial bootstrapping and load this module
})

export class AppModule{

}

//you load the ts file from the index.html which inturn loads the module which is this, this will inturn bootstrap all the 
// components and everything else