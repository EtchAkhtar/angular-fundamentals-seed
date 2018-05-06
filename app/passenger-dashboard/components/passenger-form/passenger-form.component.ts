import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>

            <div>
                Passenger name:
                <input
                    type="text"
                    name="fullname"
                    required
                    #fullname="ngModel"
                    [ngModel]="passenger?.fullname">
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Passenger name is required
                </div>
            </div>

            <div>
                Passenger ID:
                <input
                    type="number"
                    name="id"
                    required
                    #id="ngModel"
                    [ngModel]="passenger?.id">
                    <div *ngIf="id.errors?.required && id.dirty" class="error">
                    Passenger ID is required
                </div>
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
            </div>

            <button type="submit" [disabled]="form.invalid">
                Update passenger
            </button>
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