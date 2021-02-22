import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatMenuModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [LanguageSwitcherComponent, ...MATERIAL_MODULES],
})
export class SharedModule {}
