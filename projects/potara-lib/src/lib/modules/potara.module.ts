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

@NgModule({
    declarations: [
        EnumToListPipe,
        NoElementPipe,
        ReadableSecondsPipe,
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
        if (!appBackend || !appBackend.routes || !appBackend.routes['login']) {
            throw new Error('Route "login" not found in configuration');
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

