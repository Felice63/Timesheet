//Pick up the buttn click and add a new handler

// localStorage.setItem(key, idkeyVal);
btn.addEventListener(`click`, addData);

function addData() {
  // console.log(`data added`);
  localStorage.setItem(`key`, idkeyVal);
}
