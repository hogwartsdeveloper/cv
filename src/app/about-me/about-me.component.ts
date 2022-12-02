import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { DotsComponent } from '../ui/dots/dots.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [SectionTitleComponent, DotsComponent, TranslateModule],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
