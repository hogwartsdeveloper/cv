import {
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
export class AboutMeComponent implements OnInit, OnDestroy {
  @ViewChild('mainBlock') mainBlock: ElementRef;
  destroy$ = new Subject();
  constructor(private navigateService: NavigationService) {}

  ngOnInit(): void {
    this.navigateService.scroll$
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe(() => {
        if (
          this.navigateService.isElementInViewPort(this.mainBlock.nativeElement)
        ) {
          this.navigateService.navigate$.next(MenuNavigateEnum.ABOUT);
        }
      });
  }
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
