import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';
import { DotsComponent } from '../ui/dots/dots.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [SectionTitleComponent, DotsComponent],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
