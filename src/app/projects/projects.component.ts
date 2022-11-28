import { Component, OnInit } from '@angular/core';
import { IProject } from './model/project.model';
import { projects } from './model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = projects;

  constructor() {}

  ngOnInit(): void {}
}
