import '../sass/style.scss';
import { family } from './person';

// Count the number of persons in the family object
// const keyCount = Object.keys(family).length;
// console.log(keyCount);

family.forEach(function(item) {
  console.log(item.bio);
});

console.log(family);

for (let i = 0; i < family.length; i++) {
  console.log(Math.pow(2, (i + 1)));
}

// Setup variables
// ===============================================
const pedigreeContainer = document.querySelectorAll('.pedigree-view');

console.log(`Array length = ${family.length}`);

// Create cells
// ================================================
const createCell = (content) => {
  // create a template for the cell
  const cell = `<td rowspan="1" class="m generation-">${content}</td>`;

  return cell;
}

// Create rows
// ================================================
const createRow = (arr, content) => {
  const rows = arr.map(n => `<tr>${createCell(content)}</tr>`);

  const rowsMarkup = rows.join('');

  console.log(rowsMarkup);
  return rowsMarkup;
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

// Rules for the loop:
// if familyArray = 1 then add 2 rows 2 cells
// if familyArray is at least = 2 then add 4 rows 8 cells
// if familyArray is at least = 4 then add 8 rows 24 cells

// Create the table pedigree
// ================================================
// Test to see if Pedigree class exists
if (pedigreeContainer) {

  // Look for all pedigrees
  pedigreeContainer.forEach((el) => {
    const table = `
    <table border="1px">
      <tbody>
      </tbody>
    </table>
    `;
  
    el.insertAdjacentHTML('afterbegin', table);
  });

  // Look for all pedigrees
  // for (const elContainer of pedigreeContainer) {

  // }
}

function tableCreate() {
  //body reference 
  // const body = document.getElementsByTagName('body')[0];
  const container = document.querySelector('.container');

  // create elements <table> and a <tbody>
  const tbl     = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // cells creation
  for (let j = 0; j <= 2; j++) {
    // table row creation
    const row = document.createElement("tr");

    for (let i = 0; i < 2; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      const cell = document.createElement("td");    
      let cellText = document.createTextNode("cell is row "+j+", column "+i); 

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  container.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "1");
  tbl.classList.add("created-table");
}

tableCreate();