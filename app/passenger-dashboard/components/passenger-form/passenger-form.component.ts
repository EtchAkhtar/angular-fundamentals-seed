import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form>
            Form
            {{ passenger | json }}
        </form>
    `
})
export class PassengerFormComponent {
    @Input()
    passenger: Passenger;

}