import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { DotsComponent } from '../ui/dots/dots.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../services/navigation.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [SectionTitleComponent, DotsComponent, TranslateModule],
})
export class AboutMeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mainBlock') mainBlock: ElementRef;
  destroy$ = new Subject();
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.isElementInViewPort();
  }

  ngAfterViewInit() {
    this.isElementScrollIntoView();
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
          this.navigationService.navigate$.next(MenuNavigateEnum.ABOUT);
        }
      });
  }

  isElementScrollIntoView() {
    this.navigationService.navigate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((navigate) => {
        if (
          navigate === MenuNavigateEnum.ABOUT &&
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
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
