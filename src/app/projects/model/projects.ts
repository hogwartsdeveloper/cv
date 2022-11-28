import { IProject } from './project.model';

export const projects: IProject[] = [
  {
    img: '/assets/img/tic-tac-toe.png',
    techs: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
    title: 'Tick Tac Toe',
    description:
      'Game for two players who take turns marking the spaces in a three-by-three grid with X or O',
    live: 'https://atanynbasy-x-o.netlify.app/',
    code: 'https://github.com/hogwartsdeveloper/x-o',
  },
  {
    img: '/assets/img/cloud-hub.png',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node JS',
      'Express',
      'MongoDB',
    ],
    title: 'Cloud Hub',
    description:
      'Is a cloud service that allows users to store files on "cloud" servers and distribute them to other users on the Internet',
    live: 'https://shrouded-journey-45248.herokuapp.com/',
    code: 'https://github.com/hogwartsdeveloper/cloud_hub_back',
  },
  {
    img: '/assets/img/animal-pedia.jpeg',
    techs: ['TypeScript', 'ReactNative', 'FireStore'],
    title: 'Animal Pedia',
    description:
      'introduce users to animals that are on the verge of extinction.',
    code: 'https://github.com/hogwartsdeveloper/animal_pedia',
  },
];
