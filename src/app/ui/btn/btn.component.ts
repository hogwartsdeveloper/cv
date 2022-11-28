import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  imports: [TranslateModule],
})
export class BtnComponent implements OnInit {
  @Input() btnText: string = '';
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
