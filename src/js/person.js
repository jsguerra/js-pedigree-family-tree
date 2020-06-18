// Simple data structure
// 1. add home person
// 2. add home person details (birth, marriage, death, etc)
// 3. add parent with repeated details above
// 4. destinguish between father and mother

// Family array of person objects
// ===============================================
export const family = [
  {
    "id": 1,
    "generation": 1,
    "name": "Home Person",
    "gender": "m",
    "bio": {
      "birthYear": 1940,
      "deathYear": 2018
    },
    "parents": {
      "father": 2,
      "mother": 3
    }
  },
  {
    "id": 2,
    "generation": 2,
    "name": "Father Person",
    "gender": "m",
    "bio": {
      "birthYear": 1900,
      "deathYear": 1980
    },
    "parents": {
      "father": 4,
      "mother": ""
    }
  },
  {
    "id": 3,
    "generation": 2,
    "name": "Mother Person",
    "gender": "f",
    "bio": {
      "birthYear": 1900,
      "deathYear": 1980
    },
    "parents": {
      "father": "",
      "mother": ""
    }
  },
  {
    "id": 4,
    "generation": 3,
    "name": "Father Person",
    "gender": "m",
    "bio": {
      "birthYear": 1880,
      "deathYear": 1920
    },
    "parents": {
      "father": "",
      "mother": ""
    }
  }
]

// exports.family = family;