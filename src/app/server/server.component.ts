import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

    constructor() { }

    userName = '';
    showDetails = false;
    times = [];
    count = 0;

    ngOnInit(): void {
    }

    updateName() {
        this.userName = '';
    }

    recordDisplayDetailsClicks() {
        this.times.push(new Date(Number(new Date())));
        this.count++;
    }

    displayDetails() {
        this.showDetails = !this.showDetails;
    }

}