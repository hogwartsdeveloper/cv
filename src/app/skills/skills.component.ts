import { Component, OnInit } from '@angular/core';
import { db, frameworks, language, other, tools } from './models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  language = language;
  frameworks = frameworks;
  databases = db;
  other = other;
  tools = tools;

  constructor() {}

  ngOnInit(): void {}
}
