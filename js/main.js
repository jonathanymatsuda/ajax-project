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

  var $rowThree = document.createElement('div');
  $rowThree.setAttribute('class', 'row text-align-center');
  $li.appendChild($rowThree);

  var $columnFullTwo = document.createElement('div');
  $columnFullTwo.setAttribute('class', 'column-full');
  $rowThree.appendChild($columnFullTwo);

  var $flavorProfile = document.createElement('p');
  var $flavorProfileText = document.createTextNode('Flavor Profile');
  $flavorProfile.setAttribute('class', 'red-text');
  $columnFullTwo.appendChild($flavorProfile);
  $flavorProfile.appendChild($flavorProfileText);

  var $rowFour = document.createElement('div');
  $rowFour.setAttribute('class', 'row');
  $li.appendChild($rowFour);

  var $columnFullThree = document.createElement('div');
  $columnFullThree.setAttribute('class', 'column-full');
  $rowFour.appendChild($columnFullThree);

  var $smokyBar = document.createElement('input');
  $smokyBar.setAttribute('type', 'range');
  $smokyBar.setAttribute('name', 'smokiness');
  $smokyBar.setAttribute('id', 'smoky-profile');
  $smokyBar.setAttribute('value', logs.smokiness);
  $smokyBar.setAttribute('readonly', 'readonly');
  $columnFullThree.appendChild($smokyBar);

  var $rowForLabels = document.createElement('div');
  $rowForLabels.setAttribute('class', 'row justify-between');
  $columnFullThree.appendChild($rowForLabels);

  var $sweetLabel = document.createElement('label');
  var $sweetText = document.createTextNode('Sweet');
  $sweetLabel.setAttribute('for', 'smoky-profile');
  $sweetLabel.setAttribute('class', 'smokiness-bar white-text');
  $rowForLabels.appendChild($sweetLabel);
  $sweetLabel.appendChild($sweetText);

  var $peatyLabel = document.createElement('label');
  var $peatyText = document.createTextNode('Peaty');
  $peatyLabel.setAttribute('for', 'smoky-profile');
  $peatyLabel.setAttribute('class', 'smokiness-bar white-text');
  $rowForLabels.appendChild($peatyLabel);
  $peatyLabel.appendChild($peatyText);

  var $rowFive = document.createElement('div');
  $rowFive.setAttribute('class', 'row');
  $li.appendChild($rowFive);

  var $columnFullFour = document.createElement('div');
  $columnFullFour.setAttribute('class', 'column-full');
  $rowFive.appendChild($columnFullFour);

  var $intensityBar = document.createElement('input');
  $intensityBar.setAttribute('type', 'range');
  $intensityBar.setAttribute('name', 'intensity');
  $intensityBar.setAttribute('id', 'intensity-profile');
  $intensityBar.setAttribute('value', logs.intensity);
  $intensityBar.setAttribute('readonly', 'readonly');
  $columnFullFour.appendChild($intensityBar);

  var $rowForLabelsTwo = document.createElement('div');
  $rowForLabelsTwo.setAttribute('class', 'row justify-between');
  $columnFullFour.appendChild($rowForLabelsTwo);

  var $smoothLabel = document.createElement('label');
  var $smoothText = document.createTextNode('Smooth');
  $smoothLabel.setAttribute('for', 'intensity-profile');
  $smoothLabel.setAttribute('class', 'intensity-bar white-text');
  $rowForLabelsTwo.appendChild($smoothLabel);
  $smoothLabel.appendChild($smoothText);

  var $intenseLabel = document.createElement('label');
  var $intenseText = document.createTextNode('Intense');
  $intenseLabel.setAttribute('for', 'intensity-profile');
  $intenseLabel.setAttribute('class', 'intensity-bar white-text');
  $rowForLabelsTwo.appendChild($intenseLabel);
  $intenseLabel.appendChild($intenseText);

  var $rowSix = document.createElement('div');
  $rowSix.setAttribute('class', 'row text-align-center');
  $li.appendChild($rowSix);

  var $columnFullFive = document.createElement('div');
  $columnFullFive.setAttribute('class', 'column-full');
  $rowSix.appendChild($columnFullFive);

  var $tastingNotesOf = document.createElement('p');
  var $tastingNotesofText = document.createTextNode('With tasting notes of: ');
  $tastingNotesOf.setAttribute('class', 'red-text');
  $columnFullFive.appendChild($tastingNotesOf);
  $tastingNotesOf.appendChild($tastingNotesofText);

  var $taste = document.createElement('span');
  var $tastingNotes = document.createTextNode(logs.notes);
  $taste.setAttribute('class', 'white-text');
  $tastingNotesOf.appendChild($taste);
  $taste.appendChild($tastingNotes);

  var $rowSeven = document.createElement('div');
  $rowSeven.setAttribute('class', 'row text-align-center');
  $li.appendChild($rowSeven);

  var $columnFullSix = document.createElement('div');
  $columnFullSix.setAttribute('class', 'column-full');
  $rowSeven.appendChild($columnFullSix);

  var $final = document.createElement('p');
  var $finalText = document.createTextNode('Final Score: ');
  $final.setAttribute('class', 'red-text');
  $columnFullSix.appendChild($final);
  $final.appendChild($finalText);

  var $score = document.createElement('span');
  var $finalScore = document.createTextNode(logs.score);
  $score.setAttribute('class', 'white-text');
  $final.appendChild($score);
  $score.appendChild($finalScore);

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
