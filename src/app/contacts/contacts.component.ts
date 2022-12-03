import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../services/navigation.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, TranslateModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
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
          this.navigateService.navigate$.next(MenuNavigateEnum.CONTACT);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
