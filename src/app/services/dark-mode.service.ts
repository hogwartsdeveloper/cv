import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  onDarkMode$ = new ReplaySubject<boolean>(1);
  constructor() {}
}
