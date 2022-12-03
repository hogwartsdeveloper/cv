import {
  AfterViewInit,
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
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mainBlock') mainBlock: ElementRef;
  projects: IProject[] = projects;
  destroy$ = new Subject();

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.isElementInViewPort();
  }

  ngAfterViewInit() {
    this.isElementScrollIntoView();
  }

  isElementScrollIntoView() {
    this.navigationService.navigate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((navigate) => {
        if (
          navigate === MenuNavigateEnum.WORK &&
          !this.navigationService.isElementInViewPort(
            this.mainBlock?.nativeElement
          )
        ) {
          window.scrollTo({
            top: this.mainBlock.nativeElement.getBoundingClientRect().top - 64,
            behavior: 'smooth',
          });
        }
      });
  }
  isElementInViewPort() {
    this.navigationService.scroll$
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe(() => {
        if (
          this.navigationService.isElementInViewPort(
            this.mainBlock.nativeElement
          )
        ) {
          this.navigationService.navigate$.next(MenuNavigateEnum.WORK);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
