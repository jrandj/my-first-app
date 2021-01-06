import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styles: [
        `
        p {
            background-color: green;
            border: 1px solid green;
        }
        `
    ]
})

export class SuccessAlertComponent {
}