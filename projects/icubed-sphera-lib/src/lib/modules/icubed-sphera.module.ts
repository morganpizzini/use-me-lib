import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EnumToListPipe } from '../pipes/enum-to-list.pipe';
import { BadgeComponent } from '../utils/badge.component';
import { NoElementPipe } from '../pipes/no-element.pipe';
import { BusyIndicatorComponent } from '../utils/busy-indicator.component';
import { ReadableSecondsPipe } from '../pipes/readable-seconds.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnvironmentInterface } from '../interfaces/environments';
import { AppConfigurationService } from '../services/routings/routing-configuration.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { RoutingState } from '../services/routing-state.service';
import { ApplicationRoute } from '../services/common';

@NgModule({
    declarations: [
        EnumToListPipe,
        NoElementPipe,
        ReadableSecondsPipe,
        BusyIndicatorComponent,
        BadgeComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        NgbModule
    ],
    exports: [
        HttpClientModule,
        EnumToListPipe,
        NoElementPipe,
        ReadableSecondsPipe,
        BusyIndicatorComponent,
        BadgeComponent
    ],
})
export class IcubedSpheraModule {
    // public static forRoot()
    public static forRoot(environment: EnvironmentInterface,
        // routes: ApplicationRoute
        // sessionHolder: SessionHolderInterface)
    )
        : ModuleWithProviders {
        return {
            ngModule: IcubedSpheraModule,
            providers: [
                AppConfigurationService,
                AuthService,
                ToastService,
                RoutingState,
                {
                    provide: 'env',
                    useValue: environment
                },
                // {
                //     provide: 'routes',
                //     useValue: routes
                // }
            ]
        };
    }
}

