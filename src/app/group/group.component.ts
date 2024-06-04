import { Component, Input } from '@angular/core';
import { IGroup } from '../../api/group.type';
import { HueLightsApiService } from '../hue-lights-api.service';
import { IState } from '../../api/state.type';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrl: './group.component.scss'
})
export class GroupComponent {
    @Input() group: IGroup = {
        name: '',
        lights: [],
        sensors: [],
        type: '',
        state: {},
        recycle: false,
        action: {}
    };
    shouldRefreshLightState: Subject<boolean> = new Subject();

    constructor(private hueLightsApi: HueLightsApiService) { }

    onGroupLightSwitch(event: any): void {
        for (const lightId of this.group.lights) {
            this.hueLightsApi.setLightState(
                lightId,
                {
                    on: event.target.checked
                } as IState
            ).subscribe();
        }
        this.shouldRefreshLightState.next(true);
    }
}
