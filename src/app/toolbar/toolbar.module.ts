import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ToolbarComponent, LanguageSelectComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
