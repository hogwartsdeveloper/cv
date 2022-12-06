import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  onDarkMode$ = new BehaviorSubject<boolean>(true);
  constructor() {}
}
