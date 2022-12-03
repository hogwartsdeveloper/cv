import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { BtnComponent } from '../ui/btn/btn.component';
import { LogoComponent } from '../ui/logo/logo.component';
import { DotsComponent } from '../ui/dots/dots.component';
import { SquareComponent } from '../ui/square/square.component';
import { NavigationService } from '../services/navigation.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    TranslateModule,
    BtnComponent,
    LogoComponent,
    DotsComponent,
    SquareComponent,
  ],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
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
          this.navigationService.navigate$.next(MenuNavigateEnum.HOME);
        }
      });
  }

  isElementScrollIntoView() {
    this.navigationService.navigate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((navigate) => {
        if (
          navigate === MenuNavigateEnum.HOME &&
          !this.navigationService.isElementInViewPort(
            this.mainBlock?.nativeElement
          )
        ) {
          window.scrollTo({
            top: this.mainBlock.nativeElement.getBoundingClientRect().top,
            behavior: 'smooth',
          });
        }
      });
  }

  onClick(link: string) {
    window.open(link, '_self');
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
