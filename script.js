let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
