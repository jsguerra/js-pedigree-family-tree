import '../sass/style.scss';

console.log('Webpack Boilerplate');

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

// Table structure
// 1. if only 1 person
//   a. 2 rows are initially added
//   b. 1 cell per row is added
// 2. if a parent is added
//   a. cell added to existing row
//   b. rowspan added to first cell
//   c. new row added with new cell
// 3. distinguish between father and mother
//   a. if father add cell to first row
//     and add second row below first row
//   b. if mother add cell to second row
//     and add second row below second row

// Setup Pedigree Table
// ===============================================
const pedigreeContainer = document.querySelectorAll('.pedigree-view');

if (pedigreeContainer) {
  for (const elContainer of pedigreeContainer) {
    const table = `<table><tbody></tbody></table>`;
  
    elContainer.insertAdjacentHTML('afterbegin', table);
  }
}