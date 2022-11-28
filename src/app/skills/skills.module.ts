import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SectionTitleComponent],
  exports: [SkillsComponent],
})
export class SkillsModule {}
