export type IconsId =
  | 'email'
  | 'github'
  | 'linkedin'
  | 'menu-close'
  | 'menu';

export type IconsKey =
  | 'Email'
  | 'Github'
  | 'Linkedin'
  | 'MenuClose'
  | 'Menu';

export enum Icons {
  Email = 'email',
  Github = 'github',
  Linkedin = 'linkedin',
  MenuClose = 'menu-close',
  Menu = 'menu',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Email]: '61697',
  [Icons.Github]: '61698',
  [Icons.Linkedin]: '61699',
  [Icons.MenuClose]: '61700',
  [Icons.Menu]: '61701',
};
