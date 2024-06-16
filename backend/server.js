const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const moment = require('moment'); 

const app = express();
const port = 5000;

app.use(cors());

let inventoryData = [];

fs.createReadStream('./sample-data-v2.csv')
  .pipe(csv())
  .on('data', (row) => {
    inventoryData.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/api/inventory', (req, res) => {
  
  

  let { make, duration } = req.query;

  let filteredData = inventoryData;

  if (make) {
    const makes = make.split(',');
    filteredData = filteredData.filter((item) => makes.includes(item.Make.toLowerCase()));
  }

  if (duration) {
    const now = moment();
    filteredData = filteredData.filter((item) => {
      const date = moment(item.Date, 'YYYY-MM-DD'); 
      switch (duration) {
        case 'Last Month':
          return date.isAfter(now.clone().subtract(1, 'month'));
        case 'This Month':
          return date.isSame(now, 'month');
        case 'Last 3 Months':
          return date.isAfter(now.clone().subtract(3, 'months'));
        case 'Last 6 Months':
          return date.isAfter(now.clone().subtract(6, 'months'));
        case 'This Year':
          return date.isSame(now, 'year');
        case 'Last Year':
          return date.isAfter(now.clone().subtract(1, 'year'));
        default:
          return true;
      }
    });
  }

  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
