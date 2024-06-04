import { Component, OnInit } from '@angular/core';
import { IGroup } from '../api/group.type';
import { HueLightsApiService } from './hue-lights-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    groups: IGroup[] = [];

    constructor(private hueLightsApi: HueLightsApiService) { }

    ngOnInit(): void {
        this.hueLightsApi.getGroups().subscribe(response => this.groups = response);
    }
}