var $journalForm = document.querySelector('#journal-form');
var $ul = document.querySelector('#entries-list');

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

function renderLogs(logs) {
  var $li = document.createElement('li');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row text-align-center');
  $li.appendChild($row);

  var $columnFull = document.createElement('div');
  $columnFull.setAttribute('class', 'column-full');
  $row.appendChild($columnFull);

  var $nameAndAge = document.createElement('h3');
  var $nameAndAgeText = document.createTextNode(logs.name + ' ' + logs.age);
  $nameAndAge.setAttribute('class', 'white-text text-shadow');
  $columnFull.appendChild($nameAndAge);
  $nameAndAge.appendChild($nameAndAgeText);

  var $rowTwo = document.createElement('div');
  $rowTwo.setAttribute('class', 'row text-align-center');
  $li.appendChild($rowTwo);

  var $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  $rowTwo.appendChild($columnHalf);

  var $distilleryFrom = document.createElement('p');
  var $distilleryFromText = document.createTextNode('From: ');
  $distilleryFrom.setAttribute('class', 'red-text');
  $columnHalf.appendChild($distilleryFrom);
  $distilleryFrom.appendChild($distilleryFromText);

  var $distillery = document.createElement('span');
  var $distilleryName = document.createTextNode(logs.distillery);
  $distillery.setAttribute('class', 'white-text');
  $distilleryFrom.appendChild($distillery);
  $distillery.appendChild($distilleryName);

  var $columnHalfTwo = document.createElement('div');
  $columnHalfTwo.setAttribute('class', 'column-half');
  $rowTwo.appendChild($columnHalfTwo);

  var $dateOn = document.createElement('p');
  var $dateOnText = document.createTextNode('On: ');
  $dateOn.setAttribute('class', 'red-text');
  $columnHalfTwo.appendChild($dateOn);
  $dateOn.appendChild($dateOnText);

  var $date = document.createElement('span');
  var $dateTried = document.createTextNode(logs.date);
  $date.setAttribute('class', 'white-text');
  $dateOn.appendChild($date);
  $date.appendChild($dateTried);

  return $li;
}

function logTreeCreation(event) {
  for (var entry = 0; entry < data.logs.length; entry++) {
    $ul.appendChild(renderLogs(data.logs[entry]));
  }
}

/* <li> - DOM Tree HTML
  <div class="row text-align-center">
    <div class="column-full">
      <h3 class="white-text text-shadow">logs.title - logs.age</h3>
    </div>
  </div>
  <div class="row text-align-center">
    <div class="column-half">
      <p class="white-text"><span class="red-text">From: </span>logs.distillery</p>
    </div>
    <div class="column-half">
      <p class="white-text"><span class="red-text">On: </span>logs.date</p>
    </div>
  </div>
  <div class="row text-align-center">
    <div class="column-full">
      <p class="red-text">Flavor Profile</p>
    </div>
  </div>
  <div class="row">
    <div class="column-full">
      <input type="range" name="smokiness" id="smoky-profile" min="0" max="100" step="1">
      <div class ="row justify-between">
      <label for="smoky-profile" class ="smokiness-bar white-text">Sweet</label>
      <label for="smoky-profile" class ="smokiness-bar white-text">Peaty</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="column-full">
      <input type="range" name="intensity" id="intensity-profile" min="0" max="100" step="1">
      <div class ="row justify-between">
      <label for="intensity-profile" class ="intensity-bar white-text">Smooth</label>
      <label for="intensity-profile" class ="intensity-bar white-text">Intense</label>
      </div>
    </div>
  </div>
  <div class="row text-align-center">
    <div class="column-full">
      <p class="white-text"><span class='red-text'>With tasting notes of: </span>logs.notes</p>
    </div>
  </div>
  <div class="row text-align-center">
    <div class="column-full">
      <p class="white-text"><span class="red-text">Final Score: </span>logs.score</p>
    </div>
  </div>
</li> */

$journalForm.addEventListener('submit', submission);
window.addEventListener('DOMContentLoaded', logTreeCreation);
