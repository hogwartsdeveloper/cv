export type IconsId =
  | 'app'
  | 'email'
  | 'github'
  | 'linkedin'
  | 'menu-close'
  | 'menu';

export type IconsKey =
  | 'App'
  | 'Email'
  | 'Github'
  | 'Linkedin'
  | 'MenuClose'
  | 'Menu';

export enum Icons {
  App = 'app',
  Email = 'email',
  Github = 'github',
  Linkedin = 'linkedin',
  MenuClose = 'menu-close',
  Menu = 'menu',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.App]: '61697',
  [Icons.Email]: '61698',
  [Icons.Github]: '61699',
  [Icons.Linkedin]: '61700',
  [Icons.MenuClose]: '61701',
  [Icons.Menu]: '61702',
};
