import { Component } from '@angular/core'
//since we will be doing routing lets import angulars routing service
import { Router } from "@angular/router";
@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Event Form goes here]</h3>
            <br/>
            <br />

            <button type="submit" class="btn btn-primary">Save</button>
            <button type="submit" class="btn btn-default" (click)="Cancel()">Cancel</button>
        <div>

    `
})

export class CreateEventComponent{
    constructor(private router: Router){

    }

    Cancel(){
        this.router.navigate(['/events'])
    }
}