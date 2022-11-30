import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../ui/section-title/section-title.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
