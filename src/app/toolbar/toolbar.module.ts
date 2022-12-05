import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarComponent, LanguageSelectComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, MatButtonModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
