import { Component, Input } from "@angular/core";

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [`
        .modal-body{ height:250px; overflow-y: scroll; }
    `]
})

export class SimpleModalComponent {
    @Input() title: string;
}