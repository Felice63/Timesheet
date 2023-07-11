const btn = document.querySelector("button");

// NOTE: The variables inside the event handler have to be inside because if they are outside they take on global scope and return undefined.

function calcTimeSpent() {
  // Get the idKey field
  const idKey = document.querySelector("#key");
  const idkeyVal = idKey.value;

  // Get the date field
  const date = document.querySelector("#date");
  const dateVal = date.value;

  // Get the description field
  const description = document.querySelector("#description");
  const descriptionVal = description.value;

  // Get the time input fields
  const startTime = document.querySelector("#startTime");
  const endTime = document.querySelector("#endTime");

  // Get their values. The default type is string
  const startTimeVal = startTime.value;
  const endTimeVal = endTime.value;

  // The valueAsNumber property converts the input values to numbers in milliseconds
  const startTimeMls = startTime.valueAsNumber;
  const endTimeMls = endTime.valueAsNumber;

  // There are 3600000 mls in one hour. This will be the divisor to get the number of hours
  const mls = 3600000;

  // Need a conditional to account for sarting before midnight and ending after midnight:

  // Need to Initialize timeTotal with let so it can be accesed by the conditional. It's also being used further down.
  let timeTotal;

  if (endTimeMls > startTimeMls) {
    // Round to 2 decimals. Math.round won't do it
    timeTotal = Number.parseFloat((endTimeMls - startTimeMls) / mls).toFixed(2);
  } else {
    // Need to the difference of time inputs from 24
    timeTotal = Number.parseFloat(
      24 - (startTimeMls - endTimeMls) / mls
    ).toFixed(2);
  }

  console.log(`
  ID : ${idkeyVal},
  Date : ${dateVal},
  Description : ${descriptionVal},
  Start time : ${startTimeMls}, 
  End time : ${endTimeMls},
  Total time : ${timeTotal}
  `);

  // Get the ul with class = 'result'
  let result = document.querySelector(".result");

  // Create an li inside the ul:
  const li = document.createElement("li");

  // Write to the list. This needs to go inside the event handler because the variables are block scoped

  // li.textContent = `
  //   ID : ${idkeyVal}.
  //   Date : ${dateVal}.
  //   Description : ${descriptionVal}.
  //   Start time: ${startTimeVal}.
  //   End time: ${endTimeVal}.
  //   Total time: ${timeTotal} hours
  // `;

  // Append the li element to the ul with class='result'
  result.appendChild(li);

  // Add to Local storage

  localStorage.setItem(
    `${idkeyVal}`,
    `
    Date : ${dateVal}.
    Description : ${descriptionVal}.
    Start time: ${startTimeVal}.
    End time: ${endTimeVal}.
    Total time: ${timeTotal} hours
    `
  );

  // local storage get test:

  li.textContent = localStorage.getItem(`${idkeyVal}`);
}

// Add the event listener and point to the event handler
btn.addEventListener(`click`, calcTimeSpent);
