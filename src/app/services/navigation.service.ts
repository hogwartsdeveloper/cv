import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MenuNavigateEnum } from '../toolbar/models/toolbar-item.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  scroll$ = new Subject<boolean>();
  navigate$ = new BehaviorSubject<MenuNavigateEnum>(MenuNavigateEnum.HOME);
  constructor() {}

  isElementInViewPort(element: HTMLElement) {
    const rect = element.getBoundingClientRect();

    const viewPortBottom =
      window.innerHeight || document.documentElement.clientHeight;
    const viewPortRight =
      window.innerWidth || document.documentElement.clientWidth;

    const isTopInViewPort = rect.top >= 0,
      isLeftInViewPort = rect.left >= 0,
      isBottomInViewPort = rect.bottom <= viewPortBottom,
      isRightInViewPort = rect.right <= viewPortRight;

    return (
      isTopInViewPort &&
      isLeftInViewPort &&
      isBottomInViewPort &&
      isRightInViewPort
    );
  }
}
