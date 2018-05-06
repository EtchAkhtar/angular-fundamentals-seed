import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{ passenger | json }}
            <div>
                Passenger name:
                <input
                    type="text"
                    name="fullname"
                    [ngModel]="passenger?.fullname">
            </div>
            <div>
                Passenger ID:
                <input
                    type="number"
                    name="id"
                    [ngModel]="passenger?.id">
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="checkedIn"
                        [value]="true"
                        [ngModel]="passenger?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                    Yes
                    <input
                        type="radio"
                        name="checkedIn"
                        [value]="false"
                        [ngModel]="passenger?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                    No
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check-in Date:
                <input 
                    type="number"
                    name="checkInDate"
                    [ngModel]="passenger?.checkInDate">

            </div>

            {{ form.value | json }}
        </form>
    `
})
export class PassengerFormComponent {
    @Input()
    passenger: Passenger;

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.passenger.checkInDate = Date.now();
        }
    }
}