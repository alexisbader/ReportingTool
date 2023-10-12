// Imports
const express = require("express");
const bodyParser = require('body-parser')

const PORT = 3001;

const app = express();

app.use(bodyParser());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Fix bug with axios
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Get selected columns from frontend and store in variable
var cols = []
var {header} = cols

function getCols()  {
  app.post("/cols", (req, res) => {
    res.status(200).send('POST request to the homepage');
    console.log('Got req: ', req.body);
    cols = req.body
    console.log('cols: ', cols)
  });
}

// Get filters from front end
app.post("/filter", (req, res) => {
  res.status(200).send('POST request to the homepage');
  console.log('Got req: ', req.body);
});


// Mock Data 
("use strict");

const data = [
  {
    firstName: "John",
    lastName: "Bailey",
    email: "john@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Leonard",
    lastName: "Clark",
    email: "leo@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Phil",
    lastName: "Knox",
    email: "phil@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Sonia",
    lastName: "Glover",
    email: "sonia@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Adam",
    lastName: "Mackay",
    email: "adam@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Lisa",
    lastName: "Ogden",
    email: "lisa@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Elizabeth",
    lastName: "Murray",
    email: "liz@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Caroline",
    lastName: "Jackson",
    email: "caroline@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Kylie",
    lastName: "James",
    email: "kyle@veriday.com",
    workflow: "ON",
  },
  {
    firstName: "Harry",
    lastName: "Peake",
    email: "harry@veriday.com",
    workflow: "ON",
  },
];

const Excel = require("exceljs");

// need to create a workbook object. Almost everything in ExcelJS is based off of the workbook object.
let workbook = new Excel.Workbook();

let worksheet = workbook.addWorksheet("Report");
  
var colArray = []
getCols().then(
  console.log('length', cols),
  console.log('test', colArray)
)


console.log('length', cols)
console.log('test', colArray)

const headers = [
  { header: 'First name', key: 'firstName', width: 15 },
  { header: 'Last name', key: 'lastName', width: 15 },
  { header: 'Email', key: 'email', width: 15 },
  { header: 'Workflow', key: 'workflow', width: 15 },
]

worksheet.columns = headers

// worksheet.colums = cols

// force the columns to be at least as long as their header row.
// Have to take this approach because ExcelJS doesn't have an autofit property.
// worksheet.columns.forEach((column) => {
//   column.width = column.header.length < 12 ? 12 : column.header.length;
// });

// Make the header bold.
// Note: in Excel the rows are 1 based, meaning the first row is 1 instead of 0.
worksheet.getRow(1).font = { bold: true };

// Dump all the data into Excel
data.forEach((e, index) => {
  // row 1 is the header.
  const rowIndex = index + 2;

  // By using destructuring we can easily dump all of the data into the row without doing much
  // We can add formulas pretty easily by providing the formula property.
  worksheet.addRow({
    ...e,
  });
});

const totalNumberOfRows = worksheet.rowCount;

// loop through all of the rows and set the outline style.
worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
  worksheet.getCell(`A${rowNumber}`).border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "none" },
  };

  const insideColumns = ["B", "C", "D"];

  insideColumns.forEach((v) => {
    worksheet.getCell(`${v}${rowNumber}`).border = {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "none" },
      right: { style: "none" },
    };
  });

  worksheet.getCell(`F${rowNumber}`).border = {
    top: { style: "thin" },
    left: { style: "none" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
});

// The last A cell needs to have some of it's borders removed.
worksheet.getCell(`A${worksheet.rowCount}`).border = {
  top: { style: "thin" },
  left: { style: "none" },
  bottom: { style: "none" },
  right: { style: "thin" },
};

const totalCell = worksheet.getCell(`B${worksheet.rowCount}`);
totalCell.font = { bold: true };
totalCell.alignment = { horizontal: "center" };

// Create a freeze pane, which means we'll always see the header as we scroll around.
worksheet.views = [{ state: "frozen", xSplit: 0, ySplit: 1, activeCell: "B2" }];

// Keep in mind that reading and writing is promise based.
workbook.xlsx.writeFile("Report.xlsx").then(() => {
  app.post("/src", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
});
