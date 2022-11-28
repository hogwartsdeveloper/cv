import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  imports: [TranslateModule],
})
export class SectionTitleComponent implements OnInit {
  @Input() sectionTitle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
