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
