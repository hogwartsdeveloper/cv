import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { BtnComponent } from '../ui/btn/btn.component';

@Component({
  standalone: true,
  imports: [MatButtonModule, TranslateModule, BtnComponent],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
