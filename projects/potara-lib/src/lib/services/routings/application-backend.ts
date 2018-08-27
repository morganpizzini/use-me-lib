import { ApplicationRoute } from './application-route';

export interface ApplicationBackEnd {
    routePrefix: string;
    routes: ApplicationRoute;
}
