var $journalForm = document.querySelector('#journal-form');

function submission(event) {
  event.preventDefault();
  var inputValues = {
    name: $journalForm.elements.whiskey.value,
    distillery: $journalForm.elements.distillery.value,
    date: $journalForm.elements.date.value,
    age: $journalForm.elements.age.value,
    smokiness: $journalForm.elements.smokiness.value,
    intensity: $journalForm.elements.intensity.value,
    notes: $journalForm.elements.taste.value,
    score: $journalForm.elements.score.value,
    entryID: data.nextEntryId++
  };
  data.logs.unshift(inputValues);
  $journalForm.reset();
}

$journalForm.addEventListener('submit', submission);
