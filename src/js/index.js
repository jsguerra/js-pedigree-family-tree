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

// Rules for the loop, if familyArray = 1 then add 2 rows 2 cells
// if familyArray is at least = 2 then add 4 rows 8 cells
// if familyArray is at least = 4 then add 8 rows 24 cells

// for (let i = 0; i < familyArr.length; i++) {
//   console.log(Math.pow(2, (i + 1)));
// }

// Create cells based on family members
const createCell = (content, rowspan) => {
  // create a template for the cell
  const cell = `<td rowspan="${rowspan}">${content}</td>`;

  return cell;
}

const createRow = () => {

}