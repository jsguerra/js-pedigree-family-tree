import '../sass/style.scss';
import genealogy from './person';

// console.log(family);
// console.log(family.family.personOne);
// console.log(family.family.personOne.name);

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
    const table = `
    <table>
      <tbody>
      </tbody>
    </table>
    `;
  
    elContainer.insertAdjacentHTML('afterbegin', table);
  }
}

// Loop through the family
for (let family in genealogy) {
  console.log(genealogy[family]);
}

// Count the number of persons in the family object
const keyCount = Object.keys(genealogy.family).length;
console.log(keyCount);

// Create cells based on family members
const createRowCell = () => {
  const cell = `
    <tr>
      <td rowspan="1">${genealogy.family.personOne.name}</td>
    </tr>
    <tr>
      <td rowspan="1">${genealogy.family.personOne.birthYear}</td>
    </tr>
  `;
  console.log('hello')
}

createRowCell();