import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { BtnComponent } from '../ui/btn/btn.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProjectsComponent, ProjectItemComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, SectionTitleComponent, BtnComponent, TranslateModule],
})
export class ProjectsModule {}
