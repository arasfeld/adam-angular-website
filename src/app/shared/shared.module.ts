// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  

import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { InputFileComponent } from './components/input-file/input-file.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutoFocusDirective,
    InputFileComponent
  ],
  exports: [
    AutoFocusDirective,
    InputFileComponent
  ],
  providers: []
})
export class SharedModule { }