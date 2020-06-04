// export default class Person {
//   constructor() {
//     this.name = '';
//     this.bio = {
//       birthYear: '',
//       deathYear: '',
//     };
//     this.parents = {
//       father: {
//         name: '',
//         bio: {
//           birthYear: '',
//           deathYear: ''
//         }
//       },
//       mother: {
//         name: '',
//         bio: {
//           birthYear: '',
//           deathYear: ''
//         }
//       }
//     }
//   }
// }

// Simple data structure
// 1. add home person
// 2. add home person details (birth, marriage, death, etc)
// 3. add parent with repeated details above
// 4. destinguish between father and mother

// Person setup
// ===============================================
const family = {
  personOne: {
    id: 1,
    name: 'Home Person',
    birthYear: 1940,
    deathYear: 2018,
    father: '',
    mother: ''
  },
  personTwo: {
    id: 2,
    name: 'Father Person',
    birthYear: 1900,
    deathYear: 1980,
    father: '',
    mother: ''
  },
  personThree: {
    id: 3,
    name: 'Mother Person',
    birthYear: 1900,
    deathYear: 1980,
    father: '',
    mother: ''
  }
}

exports.family = family;