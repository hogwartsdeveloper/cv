import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  imports: [NgClass],
})
export class SquareComponent implements OnInit {
  @Input() width: number = 20;
  @Input() height: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
