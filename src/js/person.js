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
const person = {
  name: 'Home Person',
  bio: {
    birthYear: 1940,
    deathYear: 2018,
  },
  parents: {
    father: {
      name: 'father',
      bio: {
        birthYear: 1900,
        deathYear: 1960
      }
    },
    mother: {
      name: 'mother',
      bio: {
        birthYear: 1900,
        deathYear: 1960
      }
    }
  }
}

exports.person = person;