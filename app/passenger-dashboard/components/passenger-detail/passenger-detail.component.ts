import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="passenger.checkedIn"></span>
            <div *ngIf="editing">
                <input 
                    type="text" 
                    [value]="passenger.fullname"
                    (input)="onNameChange(name.value)" #name>
            </div>
            <div *ngIf="!editing">{{ passenger.fullname }}</div>
            <div class="date">
                Check in date: 
                {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
            </div>

            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
            <button (click)="goToPassenger()">
                View
            </button>
        </div>
    `
})
export class PassengerDetailComponent implements OnChanges {
    @Input()
    passenger: Passenger;

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;

    constructor() {}
    
    ngOnChanges(changes) {
        if (changes.passenger) {
            this.passenger = Object.assign({}, changes.passenger.currentValue);
        }
    }

    onNameChange(value: string) {
        this.passenger.fullname = value;
    }

    onRemove(value: string) {
        this.remove.emit(this.passenger);
    }

    toggleEdit() {
         if (this.editing) {
            this.edit.emit(this.passenger);
        }

        this.editing = !this.editing;
    }

    goToPassenger() {
        this.view.emit(this.passenger);
    }
}