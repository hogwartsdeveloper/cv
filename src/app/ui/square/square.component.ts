import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  imports: [NgClass],
})
export class SquareComponent implements OnInit, AfterViewInit {
  @Input() width: number = 86;
  @Input() height: number = 86;

  @ViewChild('square') square: ElementRef | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const el = this.square?.nativeElement;
    el.style.width = `${this.width}px`;
    el.style.height = `${this.height}px`;
  }
}
