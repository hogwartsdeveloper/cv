import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { LogoComponent } from '../ui/logo/logo.component';
import { DotsComponent } from '../ui/dots/dots.component';
import { SquareComponent } from '../ui/square/square.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SectionTitleComponent,
    LogoComponent,
    DotsComponent,
    SquareComponent,
  ],
  exports: [SkillsComponent],
})
export class SkillsModule {}
