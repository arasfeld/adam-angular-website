import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

import { routing } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    routing
  ],
  declarations: [ContactComponent],
  exports: [],
  providers: []
})
export class ContactModule {}
