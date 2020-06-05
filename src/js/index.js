import '../sass/style.scss';
import family from './person';

// console.log(family);
// console.log(family.family.personOne);
// console.log(family.family.personOne.name);

for (let i in family) {
  console.log(family[i]);
}

// Count the number of persons in the object
const keyCount = Object.keys(family.family).length;
console.log(keyCount);

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