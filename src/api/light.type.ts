import { IState } from "./state.type";

export interface ILight {
    capabilities: object,
    config: object,
    manufacturername: string,
    modelid: string,
    name: string,
    productid: string,
    state: IState,
    swconfigid: string,
    swupdate: object,
    swversion: string,
    type: string,
    uniqueid: string
}