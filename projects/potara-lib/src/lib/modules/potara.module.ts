import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeComponent } from '../components/badge/badge.component';
import { BusyIndicatorComponent } from '../components/busy-indicator/busy-indicator.component';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { ImageSpinnerComponent } from '../components/image-spinner/image-spinner.component';
import { InlineEditComponent } from '../components/inline-edit/inline-edit.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { EnvironmentInterface } from '../interfaces/environments';
import { ElementSelectorPipe } from '../pipes/element-selector.pipe';
import { EnumToListPipe } from '../pipes/enum-to-list.pipe';
import { NoValuePipe } from '../pipes/no-value.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { ReadableSecondsPipe } from '../pipes/readable-seconds.pipe';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { DialogService } from '../services';
import { RoutingState } from '../services/routing-state.service';
// import { RoutingConfigurationService } from '../services/routings/routing-configuration.service';
// import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
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
  imports: [HttpClientModule, CommonModule, NgbModule],
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
  entryComponents: [ConfirmModalComponent]
})
export class PotaraModule {
  /**
   * for root implementation
   */
  public static forRoot(environment: EnvironmentInterface): ModuleWithProviders {
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
