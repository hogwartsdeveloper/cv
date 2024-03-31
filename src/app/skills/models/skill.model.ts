export interface ISkill {
  title: string;
  skills: string[];
}

export const language: ISkill = {
  title: 'skill.language',
  skills: ['C#', 'JavaScript', 'TypeScript'],
};

export const db: ISkill = {
  title: 'skill.database',
  skills: ['PostgreSQL', 'Mongo'],
};

export const frameworks: ISkill = {
  title: 'skill.framework',
  skills: ['.NET Core', 'Angular', 'React'],
};

export const other: ISkill = {
  title: 'skill.other',
  skills: ['Docker', 'RabbitMQ', 'HTML', 'CSS', 'SCSS', 'SQL', 'Bash'],
};

export const tools: ISkill = {
  title: 'skill.tool',
  skills: ['Rider', 'WebStorm', 'Git', 'Linux', 'Figma'],
};
