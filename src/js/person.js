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
    father: 2,
    mother: 3
  },
    personTwo: {
      id: 2,
      name: 'Father Person',
      birthYear: 1900,
      deathYear: 1980,
      father: '',
      mother: ''
    },
      personFour: {
        id: 2,
        name: 'Father Person',
        birthYear: 1880,
        deathYear: 1920,
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