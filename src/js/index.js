import '../sass/style.scss';
import family from './person';

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

const familyArr = family.family.map(el => console.log(el));
console.log(`Array length = ${familyArr.length}`);

// Count the number of persons in the family object
// const keyCount = Object.keys(family.family).length;
// console.log(keyCount);

// Create cells based on family members
const createRowCell = () => {
  for (let i = 0; i < familyArr.length; i++) {
    console.log(Math.pow(2, (i + 1)));
  }
  // const cell = `
  //   <tr>
  //     <td rowspan="1">${genealogy.family[0].name}</td>
  //   </tr>
  //   <tr>
  //     <td rowspan="1">${genealogy.family[0].birthYear}</td>
  //   </tr>
  // `;
}

createRowCell();