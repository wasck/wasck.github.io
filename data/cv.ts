import { CVData } from "~/models/cv-data.model";


const CV_DATA: Array<CVData> = [
  {
    title: 'software developer frontend',
    subtitle: 'Geutebrueck, Windhagen',
    text: `
      Ad dolor officia irure magna voluptate laborum laboris. Ullamco commodo commodo duis dolore. Irure sunt sit ut aliquip. Commodo minim in excepteur ad. Aute labore consectetur fugiat aliquip eu mollit ea reprehenderit amet est ad ipsum proident. Amet elit laborum sint id Lorem deserunt amet fugiat deserunt reprehenderit veniam. Dolor et labore ullamco enim culpa anim duis.
    `,
    dateFrom: new Date('2021-05-01'),
    dateTo: new Date()
  },
  {
    title: 'software developer fullstack',
    subtitle: 'WDW Consulting, Cologne/Aachen',
    text: `
      Ad dolor officia irure magna voluptate laborum laboris. Ullamco commodo commodo duis dolore. Irure sunt sit ut aliquip. Commodo minim in excepteur ad. Aute labore consectetur fugiat aliquip eu mollit ea reprehenderit amet est ad ipsum proident. Amet elit laborum sint id Lorem deserunt amet fugiat deserunt reprehenderit veniam. Dolor et labore ullamco enim culpa anim duis.
    `,
    dateFrom: new Date('2019-11-01'),
    dateTo: new Date('2021-04-30')
  },
  {
    title: 'software developer working student',
    subtitle: 'LapID, Cologne/Siegen',
    text: `
      Ad dolor officia irure magna voluptate laborum laboris. Ullamco commodo commodo duis dolore. Irure sunt sit ut aliquip. Commodo minim in excepteur ad. Aute labore consectetur fugiat aliquip eu mollit ea reprehenderit amet est ad ipsum proident. Amet elit laborum sint id Lorem deserunt amet fugiat deserunt reprehenderit veniam. Dolor et labore ullamco enim culpa anim duis.
    `,
    dateFrom: new Date('2018-10-01'),
    dateTo: new Date('2019-10-31')
  }
];

export default CV_DATA;