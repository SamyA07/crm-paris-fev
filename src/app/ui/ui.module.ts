import { NgModule } from '@angular/core';
import { CoderbaseUiModule } from '@coderbase/ui';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }