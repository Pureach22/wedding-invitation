const { saveToSheet } = require('./google-sheets-api');

// Replace with your spreadsheet ID and range
const spreadsheetId = 'YOUR_SPREADSHEET_ID';
const range = 'Sheet1!A1:D1';

// Example data to save
const data = ['John', 'Doe', 'john@example.com', '555-1234'];

saveToSheet(spreadsheetId, range, data);