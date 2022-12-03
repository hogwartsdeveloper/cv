import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { db, frameworks, language, other, tools } from './models/skill.model';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  @ViewChild('mainBlock') mainBlock: ElementRef;
  language = language;
  frameworks = frameworks;
  databases = db;
  other = other;
  tools = tools;
  destroy$ = new Subject();

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
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
