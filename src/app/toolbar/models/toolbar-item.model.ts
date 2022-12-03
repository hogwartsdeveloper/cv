export enum MenuNavigateEnum {
  HOME = 1,
  WORK,
  ABOUT,
  CONTACT,
}

export interface IMenuLink {
  name: string;
  id: MenuNavigateEnum;
}

export const menuItems: IMenuLink[] = [
  {
    name: 'toolbar.home',
    id: MenuNavigateEnum.HOME,
  },
  {
    name: 'toolbar.works',
    id: MenuNavigateEnum.WORK,
  },
  {
    name: 'toolbar.about-me',
    id: MenuNavigateEnum.ABOUT,
  },
  {
    name: 'toolbar.contacts',
    id: MenuNavigateEnum.CONTACT,
  },
];
