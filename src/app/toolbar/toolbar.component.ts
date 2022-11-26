import { Component, OnInit } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  imports: [
    MatIconModule
  ],
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
