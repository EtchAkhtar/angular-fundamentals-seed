import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="passenger.checkedIn"></span>
            {{ passenger.fullname }}
            <div class="date">
                Check in date: 
                {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <div class="children">
                Children: {{ passenger.children?.length || 0 }}
            </div>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    passenger: Passenger;
}