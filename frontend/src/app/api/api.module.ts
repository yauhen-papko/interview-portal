import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { AuthenticationControllerService } from './services/authentication-controller.service';
import { DisciplineControllerService } from './services/discipline-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { BaseService } from './base-service';
import { HttpHeaderService } from './services/http-header.service';


/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthenticationControllerService,
    DisciplineControllerService,
    UserControllerService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderService, multi: true }
  ],
})
export class ApiModule { }
