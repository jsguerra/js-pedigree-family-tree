import '../sass/style.scss';
import family from './person';

// Count the number of persons in the family object
// const keyCount = Object.keys(family.family).length;
// console.log(keyCount);

// for (let i = 0; i < familyGroup.length; i++) {
//   console.log(Math.pow(2, (i + 1)));
// }

// Setup variables
// ===============================================
const pedigreeContainer = document.querySelectorAll('.pedigree-view');
const familyGroup = family.family;

console.log(`Array length = ${familyGroup.length}`);

// Create cells
// ================================================
const createCell = () => {
  // create a template for the cell
  const cell = `<td rowspan="1" class="m generation-">test</td>`;

  return cell;
}

// Create rows
// ================================================
const createRow = () => {
  const rows = [];

  for (let i = 0; i < familyGroup.length; i++) {
    let row = `<tr></tr>`;

    rows.push(row);
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

// Rules for the loop:
// if familyArray = 1 then add 2 rows 2 cells
// if familyArray is at least = 2 then add 4 rows 8 cells
// if familyArray is at least = 4 then add 8 rows 24 cells

// Create the table pedigree
// ================================================
// Test to see if Pedigree class exists
if (pedigreeContainer) {

  // Look for all pedigrees
  for (const elContainer of pedigreeContainer) {
    const table = `
    <table border="1px">
      <tbody>
        ${createRow()}
      </tbody>
    </table>
    `;
  
    elContainer.insertAdjacentHTML('afterbegin', table);
  }
}

function tableCreate() {
  //body reference 
  var body = document.getElementsByTagName('body')[0];

  // create elements <table> and a <tbody>
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j <= 2; j++) {
      // table row creation
      var row = document.createElement("tr");

      for (var i = 0; i < 2; i++) {
          // create element <td> and text node 
          //Make text node the contents of <td> element
          // put <td> at end of the table row
          var cell = document.createElement("td");    
          var cellText = document.createTextNode("cell is row "+j+", column "+i); 

          cell.appendChild(cellText);
          row.appendChild(cell);
      }

      //row added to end of table body
      tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}

tableCreate();