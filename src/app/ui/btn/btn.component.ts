import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  imports: [TranslateModule, NgClass],
})
export class BtnComponent implements OnInit {
  @Input() btnText: string = '';
  @Input() isGray: boolean = false;
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
