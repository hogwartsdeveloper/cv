export interface ISkill {
  title: string;
  skills: string[];
}

export const language: ISkill = {
  title: 'skill.language',
  skills: ['JavaScript', 'TypeScript'],
};

export const db: ISkill = {
  title: 'skill.database',
  skills: ['PostgreSQL', 'Mongo'],
};

export const frameworks: ISkill = {
  title: 'skill.framework',
  skills: ['Angular', 'React'],
};

export const other: ISkill = {
  title: 'skill.other',
  skills: ['HTML', 'CSS', 'SCSS', 'SQL', 'Bash'],
};

export const tools: ISkill = {
  title: 'skill.tool',
  skills: ['WebStorm', 'Git', 'Linux', 'Figma'],
};
