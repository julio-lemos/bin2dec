document.getElementById('myButton').addEventListener('click', btnConvert);

function checkDigits(digits) {
  let check = true;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0' && digits[i] !== '1') check = false;
  }

  return check;
}

function convertBin2Dec(digits) {
  let lenghtDigits = digits.length;
  let value = 0;
  let cont = 0;

  for (let i = lenghtDigits - 1; i >= 0; i--) {
    if (digits[cont] === '1') value += Math.pow(2, i);
    cont++;

    console.log(value);
  }

  return value;
}

function btnConvert() {
  let inputBin = document.getElementById('bin').value;

  if (checkDigits(inputBin)) {
    document.getElementById('number').style.background = '#68D391';
    document.getElementById('number').value = convertBin2Dec(inputBin);
  } else {
    document.getElementById('number').value = 'Entrada inválida';
    document.getElementById('number').style.background = '#FC8181';
  }
}
