export interface ISkill {
  title: string;
  skills: string[];
}

export const language: ISkill = {
  title: 'Language',
  skills: ['JavaScript', 'TypeScript'],
};

export const db: ISkill = {
  title: 'Databases',
  skills: ['PostgreSQL', 'Mongo'],
};

export const frameworks: ISkill = {
  title: 'Frameworks',
  skills: ['Angular', 'React'],
};

export const other: ISkill = {
  title: 'Other',
  skills: ['HTML', 'CSS', 'SCSS', 'SQL', 'Bash'],
};

export const tools: ISkill = {
  title: 'Tools',
  skills: ['WebStorm', 'Git', 'Linux', 'Figma'],
};
