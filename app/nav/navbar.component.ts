import { Component } from '@angular/core'

@Component({
    selector : "nav-bar",
    templateUrl: "app/nav/navbar.component.html",
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px ) { #searchForm {display:none}}
        li > a.active{color:#F97924;}
    `]
})

export class NavBarComponent{
    // Property binding demo
    // Property binding simply means you're passing data from the component class and setting the value of a given element in the view.
    // Property binding is one way, in that the data is transferred from the component to the class. 
    // PROPERTY BINDING IS USED WHEN YOU WANT TO BIND THE DATA TO THE PROPERTY OF A DOM ELEMENT
    // interpolation or the double stash {{}} is used when you want to display that data
    
}