export type IconsId =
  | 'email'
  | 'github'
  | 'linkedin';

export type IconsKey =
  | 'Email'
  | 'Github'
  | 'Linkedin';

export enum Icons {
  Email = 'email',
  Github = 'github',
  Linkedin = 'linkedin',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Email]: '61697',
  [Icons.Github]: '61698',
  [Icons.Linkedin]: '61699',
};
