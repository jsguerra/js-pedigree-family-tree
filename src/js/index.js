import '../sass/style.scss';
// import Person from './person';
import person from './person';

console.log('Webpack Boilerplate');

// const Jose = new Person();
// Jose.name = 'Jose Guerra';
// Jose.bio.birthYear = 1940;
// Jose.bio.deathYear = 2018;
// console.log(Jose);

console.log(person)

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