import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IProject } from './model/project.model';
import { projects } from './model/projects';
import { NavigationService } from '../services/navigation.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('mainBlock') mainBlock: ElementRef;
  projects: IProject[] = projects;
  destroy$ = new Subject();

  constructor(private navigateService: NavigationService) {}

  ngOnInit(): void {
    this.navigateService.scroll$
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe(() => {
        if (
          this.navigateService.isElementInViewPort(this.mainBlock.nativeElement)
        ) {
          this.navigateService.navigate$.next(MenuNavigateEnum.WORK);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
