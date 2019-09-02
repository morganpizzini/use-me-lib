import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EnumToListPipe } from '../pipes/enum-to-list.pipe';
import { ReadableSecondsPipe } from '../pipes/readable-seconds.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnvironmentInterface } from '../interfaces/environments';
// import { RoutingConfigurationService } from '../services/routings/routing-configuration.service';
// import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { RoutingState } from '../services/routing-state.service';
import { DialogService } from '../services';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { ElementSelectorPipe } from '../pipes/element-selector.pipe';
import { NoValuePipe } from '../pipes/no-value.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { BusyIndicatorComponent } from '../components/busy-indicator/busy-indicator.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { ImageSpinnerComponent } from '../components/image-spinner/image-spinner.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { InlineEditComponent } from '../components/inline-edit/inline-edit.component';
import { RouterModule } from '@angular/router';
import { Environment_Token } from '../tokens/environment-token';

@NgModule({
    declarations: [
        EnumToListPipe,
        ReadableSecondsPipe,
        SafeUrlPipe,
        ElementSelectorPipe,
        NoValuePipe,
        OrderByPipe,
        BusyIndicatorComponent,
        BadgeComponent,
        InlineEditComponent,
        ConfirmModalComponent,
        ImageSpinnerComponent
    ],
    imports: [
      HttpClientModule,
      RouterModule,
        CommonModule,
        NgbModule
    ],
    exports: [
      HttpClientModule,
        CommonModule,
        NgbModule,
        EnumToListPipe,
        ElementSelectorPipe,
        NoValuePipe,
        OrderByPipe,
        ReadableSecondsPipe,
        SafeUrlPipe,
        BusyIndicatorComponent,
        BadgeComponent,
        InlineEditComponent,
        ImageSpinnerComponent
    ],
    entryComponents: [
        ConfirmModalComponent
    ]
})
export class PotaraModule {
    // public static forRoot()
    public static forRoot(environment: EnvironmentInterface
    )
        : ModuleWithProviders {
        return {
            ngModule: PotaraModule,
            providers: [
                // RoutingConfigurationService,
                // AuthService,
                ToastService,
                DialogService,
                CanDeactivateGuard,
                RoutingState,
                {
                    provide: Environment_Token,
                    useValue: environment
                }
            ]
        };
    }
}

