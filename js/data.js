/* exported data */

var data = {
  view: 'entry-form',
  logs: [],
  editing: null,
  nextEntryId: 1
};

var previousSubmits = localStorage.getItem('logs-data');

function storeData(event) {
  var previousSubmitsJSON = JSON.stringify(data);
  localStorage.setItem('logs-data', previousSubmitsJSON);
}

if (previousSubmits !== null) {
  data = JSON.parse(previousSubmits);
}

window.addEventListener('beforeunload', storeData);
