// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AutoFocusDirective],
  exports: [AutoFocusDirective],
  providers: []
})
export class SharedModule {}
