import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

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
                        type="checkbox"
                        name="checkedIn"
                        [ngModel]="passenger?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check-in Date:
                <input 
                    type="number"
                    name="checkInDate"
                    [ngModel]="passenger?.checkInDate">

            </div>

            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="passenger?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === passenger?.baggage">
                        {{ item.value }}
                    </option>
                </select>
                <select
                    name="baggage"
                    [ngModel]="passenger?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [ngValue]="item.key">
                        {{ item.value }}
                    </option>
                </select>
            </div>

            {{ form.value | json }}
        </form>
    `
})
export class PassengerFormComponent {

    @Input()
    passenger: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },{
        key: 'hand-only',
        value: 'Hand baggage'
    },{
        key: 'hold-only',
        value: 'Hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.passenger.checkInDate = Date.now();
        }
    }
}