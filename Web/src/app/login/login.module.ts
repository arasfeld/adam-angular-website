import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule }   from '../shared/shared.module';
 
import { UserService }  from '../shared/services/user.service';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginFormComponent
  ],
  providers: [
    UserService
  ]
})
export class LoginModule { }
