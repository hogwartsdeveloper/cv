import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../model/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: IProject | undefined;

  constructor() {}

  ngOnInit(): void {}

  followingLink(link: string | undefined) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
