// Simple data structure
// 1. add home person
// 2. add home person details (birth, marriage, death, etc)
// 3. add parent with repeated details above
// 4. destinguish between father and mother

// Family array of person objects
// ===============================================
const family = [
  {
    id: 1,
    name: 'Home Person',
    birthYear: 1940,
    deathYear: 2018,
    father: 2,
    mother: 3
  },
  {
    id: 2,
    name: 'Father Person',
    birthYear: 1900,
    deathYear: 1980,
    father: '',
    mother: ''
  },
  {
    id: 3,
    name: 'Mother Person',
    birthYear: 1900,
    deathYear: 1980,
    father: '',
    mother: ''
  },
  {
    id: 4,
    name: 'Father Person',
    birthYear: 1880,
    deathYear: 1920,
    father: '',
    mother: ''
  }
]

exports.family = family;