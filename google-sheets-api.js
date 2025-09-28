const { google } = require('googleapis');

// Configure auth client
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

// Initialize sheets client
const sheets = google.sheets({ version: 'v4', auth });

async function saveToSheet(spreadsheetId, range, values) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [values] }
    });
    console.log('Data saved successfully');
  } catch (err) {
    console.error('Error saving data:', err);
  }
}

module.exports = { saveToSheet };