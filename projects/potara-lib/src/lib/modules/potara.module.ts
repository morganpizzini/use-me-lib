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
import { RoutingConfigurationService } from '../services/routings/routing-configuration.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { RoutingState } from '../services/routing-state.service';
import { ApplicationBackEnd } from '../services/common';
import { ConfirmModalComponent } from '../utils/confirm-modal.component';
import LibRoutes from '../models/library/lib-routes';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

@NgModule({
    declarations: [
        EnumToListPipe,
        NoElementPipe,
        ReadableSecondsPipe,
        SafeUrlPipe,
        BusyIndicatorComponent,
        BadgeComponent,
        ConfirmModalComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        NgbModule
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        NgbModule,
        EnumToListPipe,
        NoElementPipe,
        ReadableSecondsPipe,
        SafeUrlPipe,
        BusyIndicatorComponent,
        BadgeComponent
    ],
    entryComponents: [
        ConfirmModalComponent
    ]
})
export class PotaraModule {
    // public static forRoot()
    public static forRoot(environment: EnvironmentInterface,
        appBackend: ApplicationBackEnd
    )
        : ModuleWithProviders {
        if (!appBackend || !appBackend.routes || !appBackend.routes[LibRoutes.login] || !appBackend.routes[LibRoutes.signup]) {
            throw new Error('Some routes are NOT found in configuration, lib required ' + JSON.stringify(LibRoutes));
        }
        return {
            ngModule: PotaraModule,
            providers: [
                RoutingConfigurationService,
                AuthService,
                ToastService,
                RoutingState,
                {
                    provide: 'env',
                    useValue: environment
                },
                {
                    provide: 'bkend',
                    useValue: appBackend
                },
            ]
        };
    }
}

