import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ILight } from '../api/light.type';
import { IGroup } from '../api/group.type';
import { ISensor } from '../api/sensor.type';
import { IState } from '../api/state.type';
import { environment } from '../environment.variables';

@Injectable({
    providedIn: 'root'
})
export class HueLightsApiService {
    constructor(private http: HttpClient) { }

    getBridgeIp(): Observable<any> {
        return this.http.get('https://discovery.meethue.com');
    }

    getConfig(): Observable<any> {
        return this.http.get(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/config`);
    };

    getGroups(): Observable<IGroup[]> {
        return this.http.get<IGroup[]>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/groups`)
        .pipe(map(data => {
            const arr = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    arr.push(data[key]);
                }
            }
            return arr;
        }));
    };

    getLights(): Observable<ILight[]> {
        return this.http.get<ILight[]>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/lights`)
        .pipe(map(data => {
            const arr = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    arr.push(data[key]);
                }
            }
            return arr;
        }));
    };

    getLight(id: number): Observable<ILight> {
        return this.http.get<ILight>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/lights/${id}`);
    };

    setLightGeneric(id: number, body: object): Observable<any> {
        return this.http.put<ILight>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/lights/${id}`, body);
    }

    setLightState(id: number, state: IState): Observable<IState> {
        return this.http.put<IState>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/lights/${id}/state`, state);
    };

    getRules(): Observable<any> {
        return this.http.get(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/rules`);
    };

    getScenes(): Observable<any> {
        return this.http.get(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/scenes`);
    };

    getSchedules(): Observable<any> {
        return this.http.get(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/schedules`);
    };

    getSensors(): Observable<ISensor[]> {
        return this.http.get<ISensor[]>(`http://${environment.hueBridgeIp}/api/${environment.hueBridgeToken}/sensors`);
    };
}
