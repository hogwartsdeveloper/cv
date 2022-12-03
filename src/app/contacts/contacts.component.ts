import {
  AfterViewInit,
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
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, TranslateModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit, OnDestroy {
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
          this.navigationService.navigate$.next(MenuNavigateEnum.CONTACT);
        }
      });
  }

  isElementScrollIntoView() {
    this.navigationService.navigate$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((navigate) => {
        if (
          navigate === MenuNavigateEnum.CONTACT &&
          !this.navigationService.isElementInViewPort(
            this.mainBlock?.nativeElement
          )
        ) {
          this.mainBlock.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
