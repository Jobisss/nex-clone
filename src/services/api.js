import { EventParticipantApi } from "./api-back/src";
import apiInterceptorInstance from "./intereceptor";

const eventParticipantApi = new EventParticipantApi(apiInterceptorInstance)
export { 
    eventParticipantApi
}