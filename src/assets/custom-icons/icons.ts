export type IconsId =
  | 'app'
  | 'cv'
  | 'email'
  | 'github'
  | 'linkedin'
  | 'menu-close'
  | 'menu';

export type IconsKey =
  | 'App'
  | 'Cv'
  | 'Email'
  | 'Github'
  | 'Linkedin'
  | 'MenuClose'
  | 'Menu';

export enum Icons {
  App = 'app',
  Cv = 'cv',
  Email = 'email',
  Github = 'github',
  Linkedin = 'linkedin',
  MenuClose = 'menu-close',
  Menu = 'menu',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.App]: '61697',
  [Icons.Cv]: '61698',
  [Icons.Email]: '61699',
  [Icons.Github]: '61700',
  [Icons.Linkedin]: '61701',
  [Icons.MenuClose]: '61702',
  [Icons.Menu]: '61703',
};
