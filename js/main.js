var $banner = document.querySelector('.banner-image');
var $journalForm = document.querySelector('#journal-form');
var $applicationView = document.querySelectorAll('.application-view');
var $ul = document.querySelector('#entries-list');
// var $headerText = document.querySelector('.header-text');
// var $logsNavItem = document.querySelector('.logs-nav-item');
// var $exploreNavItem = document.querySelector('.explore-nav-item');
// var $anchor = document.querySelectorAll('a');
var $noEntries = document.querySelector('.no-entries');
var $name = document.querySelector('#whiskey-name');
var $distillery = document.querySelector('#distillery-name');
var $date = document.querySelector('#date-tried');
var $age = document.querySelector('#age-whiskey');
var $smokyBar = document.querySelector('#smoky-profile');
var $intensityBar = document.querySelector('#intensity-profile');
var $tastingNotes = document.querySelector('#taste-profile');
var $finalScore = document.querySelector('#final-score');
// var $distilleryList = document.querySelector('#distillery-list');

function submission(event) {
  event.preventDefault();
  if (data.editing === null) {
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
    var renderedLogs = renderLogs(inputValues);
    data.logs.unshift(inputValues);
    $ul.prepend(renderedLogs);
  } else {
    var updatedValues = {
      name: $name.value,
      distillery: $distillery.value,
      date: $date.value,
      age: $age.value,
      smokiness: $smokyBar.value,
      intensity: $intensityBar.value,
      notes: $tastingNotes.value,
      score: $finalScore.value,
      entryID: data.editing.entryID
    };
    var $li = document.querySelectorAll('li');
    for (var entry = 0; entry < data.logs.length; entry++) {
      if (data.editing.entryID === data.logs[entry].entryID) {
        data.logs[entry] = updatedValues;
      }
    }
    for (var liIndex = 0; liIndex < $li.length; liIndex++) {
      if (data.editing.entryID === parseInt($li[liIndex].getAttribute('data-entry-id'))) {
        var updatedLogs = renderLogs(updatedValues);
        $li[liIndex].replaceWith(updatedLogs);
      }
    }
  }
  $journalForm.reset();
  switchViews('entries');
  toggleNoLogsText();
}

function renderLogs(logs) {
  var $li = document.createElement('li');
  $li.setAttribute('data-entry-id', logs.entryID);

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

  var $editButton = document.createElement('button');
  var $editText = document.createTextNode('Edit');
  $editButton.setAttribute('class', 'edit-button');
  $nameAndAge.appendChild($editButton);
  $editButton.appendChild($editText);

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
  $smokyBar.setAttribute('class', 'slider-logged');
  $smokyBar.setAttribute('value', logs.smokiness);
  $smokyBar.setAttribute('disabled', 'true');
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
  $intensityBar.setAttribute('disabled', 'true');
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
  toggleNoLogsText();
  switchViews(data.view);
}

/* <li> - DOM Tree HTML
  <div class="row text-align-center">
    <div class="column-full">
      <h3 class="white-text text-shadow">logs.title - logs.age</h3>
      <button class="edit-button">Edit</button>
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
      <input type="range" name="smokiness" id="smoky-profile" disabled="true">
      <div class ="row justify-between">
      <label for="smoky-profile" class ="smokiness-bar white-text">Sweet</label>
      <label for="smoky-profile" class ="smokiness-bar white-text">Peaty</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="column-full">
      <input type="range" name="intensity" id="intensity-profile" disabled="true">
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

function switchViews(viewName) {
  for (var view = 0; view < $applicationView.length; view++) {
    if ($applicationView[view].getAttribute('data-view') === viewName) {
      $applicationView[view].className = 'application-view';
    } else {
      $applicationView[view].className = 'hidden application-view';
    }
  }
  data.view = viewName;
}

// function loadLogs(event) {
//   switchViews('entries');
// }

// function loadEntryForm(event) {
//   switchViews('entry-form');
//   $journalForm.reset();
// }
const navSwapper = event => {
  if (event.target.matches('.header-text')) {
    switchViews('entry-form');
    $journalForm.reset();
  } else if (event.target.matches('.logs-nav-item')) {
    switchViews('entries');
  } else if (event.target.matches('.explore-nav-item')) {
    switchViews('explore-view');
  }
};

const toggleNoLogsText = () => {
  if (data.logs.length > 0) {
    $noEntries.className = 'row text-align-center no-entries hidden';
  } else {
    $noEntries.className = 'row text-align-center no-entries';
  }
};

function editEntry(event) {
  if (event.target.tagName === 'BUTTON') {
    switchViews('entry-form');
    for (var entry = 0; entry < data.logs.length; entry++) {
      if (parseInt(event.target.closest('li').getAttribute('data-entry-id')) === data.logs[entry].entryID) {
        data.editing = data.logs[entry];
        $journalForm.elements.whiskey.value = data.logs[entry].name;
        $journalForm.elements.distillery.value = data.logs[entry].distillery;
        $journalForm.elements.date.value = data.logs[entry].date;
        $journalForm.elements.age.value = data.logs[entry].age;
        $journalForm.elements.smokiness.value = data.logs[entry].smokiness;
        $journalForm.elements.intensity.value = data.logs[entry].intensity;
        $journalForm.elements.taste.value = data.logs[entry].notes;
        $journalForm.elements.score.value = data.logs[entry].score;
      }
    }
    switchViews(data.view);
  }
}

// const getDistilleryData = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://whiskyhunter.net/api/distilleries_info/');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', () => {
//     for (let distillery = 0; distillery < xhr.response.length; distillery++) {
//       const $liColumnHalf = document.createElement('div');
//       $liColumnHalf.setAttribute('class', 'column-half');

//       const $li = document.createElement('li');
//       $li.setAttribute('class', 'distillery-panel');
//       $liColumnHalf.appendChild($li);

//       const $row = document.createElement('div');
//       $row.setAttribute('class', 'row text-align-center');
//       $li.appendChild($row);

//       const $columnFull = document.createElement('div');
//       $columnFull.setAttribute('class', 'column-full');
//       $row.appendChild($columnFull);

//       const $h3 = document.createElement('h3');
//       $h3.setAttribute('class', 'white-text text-shadow');
//       $h3.textContent = xhr.response[distillery].name;
//       $columnFull.appendChild($h3);

//       const $rowTwo = document.createElement('div');
//       $rowTwo.setAttribute('class', 'row text-align-left');
//       $li.appendChild($rowTwo);

//       const $columnHalf = document.createElement('div');
//       $columnHalf.setAttribute('class', 'column-half');
//       $rowTwo.appendChild($columnHalf);

//       const $pCountry = document.createElement('p');
//       $pCountry.setAttribute('class', 'white-text');
//       $pCountry.textContent = 'Country: ' + xhr.response[distillery].country;
//       $columnHalf.appendChild($pCountry);

//       const $columnHalfTwo = document.createElement('div');
//       $columnHalfTwo.setAttribute('class', 'column-half');
//       $rowTwo.appendChild($columnHalfTwo);

//       const $pWhiskybaseWhiskies = document.createElement('p');
//       $pWhiskybaseWhiskies.setAttribute('class', 'white-text');
//       $pWhiskybaseWhiskies.textContent = 'Types of Whiskey: ' + xhr.response[distillery].whiskybase_whiskies;
//       $columnHalfTwo.appendChild($pWhiskybaseWhiskies);

//       const $rowThree = document.createElement('div');
//       $rowThree.setAttribute('class', 'row text-align-left');
//       $li.appendChild($rowThree);

//       const $columnHalfThree = document.createElement('div');
//       $columnHalfThree.setAttribute('class', 'column-half');
//       $rowThree.appendChild($columnHalfThree);

//       const $pWhiskybaseRating = document.createElement('p');
//       $pWhiskybaseRating.setAttribute('class', 'white-text');
//       $pWhiskybaseRating.textContent = 'Whiskey Rating: ' + xhr.response[distillery].whiskybase_rating;
//       $columnHalfThree.appendChild($pWhiskybaseRating);

//       const $columnHalfFour = document.createElement('div');
//       $columnHalfFour.setAttribute('class', 'columm-half');
//       $rowThree.appendChild($columnHalfFour);

//       const $pWhiskybaseVotes = document.createElement('p');
//       $pWhiskybaseVotes.setAttribute('class', 'white-text');
//       $pWhiskybaseVotes.textContent = 'Number of Votes: ' + xhr.response[distillery].whiskybase_votes;
//       $columnHalfFour.appendChild($pWhiskybaseVotes);

//       $distilleryList.appendChild($liColumnHalf);
//     }
//   });
//   xhr.send();
// };

//  <div class="column-half"> - Distillery DOM Tree
//     <li class="distillery-panel">
//       <div class="row text-align-center">
//         <div class="column-full">
//           <h3 class="white-text text-shadow">Yamazaki</h3>
//         </div>
//       </div>
//       <div class="row text-align-left">
//         <div class="column-half">
//           <p class="white-text">Country: Japan</p>
//         </div>
//         <div class="column-half">
//           <p class="white-text">Average Sale Price: $800</p>
//         </div>
//       </div>
//       <div class="row text-align-left">
//         <div class="column-half">
//           <p class="white-text">Whiskey Base Rating: 88%</p>
//         </div>
//         <div class="column-half">
//           <p class="white-text">Votes: 1000</p>
//         </div>
//       </div>
//     </li>
//   </div>

$journalForm.addEventListener('submit', submission);
window.addEventListener('DOMContentLoaded', logTreeCreation);
$banner.addEventListener('click', navSwapper);
$ul.addEventListener('click', editEntry);
