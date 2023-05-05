import { DevStack } from "~/models/dev-stack.model";

const DEV_STACK_DATA: Array<DevStack> = [
  {
    name: 'angular',
    label: 'angular',
    size: 1,
    link: 'https://angular.io/'
  },
  {
    name: 'nodejs-light-horizontal',
    label: 'nodejs',
    size: 1,
    link: 'https://nodejs.org/en'
  },
  {
    name: 'git-light',
    label: 'git',
    size: 1,
    link: 'https://git-scm.com/'
  },
  {
    name: 'github-light',
    label: 'github',
    size: 1,
    link: 'https://github.com/'
  },
  {
    name: 'gitlab-light',
    label: 'gitlab',
    size: 1,
    link: 'https://gitlab.com/'
  },
  {
    name: 'docker-light-horizontal',
    label: 'docker',
    size: 1,
    type: 'png',
    link: 'https://www.docker.com/'
  },
  {
    name: 'nx-light',
    label: 'nx',
    size: 1,
    link: 'https://nx.dev/'
  },
  {
    name: 'windows-dark',
    label: 'windows',
    size: 1,
    link: 'https://nx.dev/'
  },
  {
    name: 'vscode-alt',
    label: 'vscode',
    size: 1,
    link: 'https://code.visualstudio.com/'
  },
  {
    name: 'linux-dark',
    label: 'linux',
    size: 1,
    link: 'https://www.linux.org/pages/download/',
  },
  {
    name: 'expressjs-dark',
    label: 'express.js',
    size: 1,
    link: 'https://expressjs.com/',
    type: 'png'
  },
  {
    name: 'nestjs',
    label: 'express.js',
    size: 1,
    link: 'https://nestjs.com/',
  },
  {
    name: 'mongodb-light',
    label: 'mongodb',
    size: 1,
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'cypress-light',
    label: 'cypress',
    size: 1,
    link: 'https://www.cypress.io/',
  },
  {
    name: 'postgresql-light',
    label: 'postgresql',
    size: 1,
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'jest-light',
    label: 'jest',
    size: 1,
    link: 'https://jestjs.io/',
  },
  {
    name: 'testing-library',
    label: 'testing-library',
    size: 1,
    link: 'https://testing-library.com/',
    type: 'png'
  },
  {
    name: 'vuejs-light',
    label: 'vuejs',
    size: 1,
    link: 'https://vuejs.org/',
  }
];

export default DEV_STACK_DATA;