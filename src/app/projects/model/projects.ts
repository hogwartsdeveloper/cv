import { IProject } from './project.model';

export const projects: IProject[] = [
  {
    img: 'assets/img/mandalorian.png',
    techs: ['Three JS', 'TypeScript', 'Angular'],
    title: 'project.mandalorian.title',
    description: 'project.mandalorian.description',
    live: 'https://ng-mando.netlify.app/',
    code: 'https://github.com/hogwartsdeveloper/mandalorian'
  },
  {
    img: 'assets/img/tic-tac-toe.png',
    techs: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
    title: 'project.tic-tac.title',
    description: 'project.tic-tac.description',
    live: 'https://atanynbasy-x-o.netlify.app/',
    code: 'https://github.com/hogwartsdeveloper/x-o',
  },
  {
    img: 'assets/img/cloud-hub.png',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node JS',
      'Express',
      'MongoDB',
    ],
    title: 'project.cloud-hub.title',
    description: 'project.cloud-hub.description',
    code: 'https://github.com/hogwartsdeveloper/cloud_hub_back',
  },
  // {
  //   img: 'assets/img/animal-pedia.jpeg',
  //   techs: ['TypeScript', 'ReactNative', 'FireStore'],
  //   title: 'project.animal.title',
  //   description: 'project.animal.description',
  //   code: 'https://github.com/hogwartsdeveloper/animal_pedia',
  // },
];
