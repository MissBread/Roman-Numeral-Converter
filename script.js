const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const userOutput = document.getElementById("output");

const convertToRoman = (num) => {
 
 const reference = [
    ['M',	1000],
    ['CM',	900],
    ['D',	500],
    ['CD',	400],
    ['C',	100],
    ['XC',	90],
    ['L',	50],
    ['XL',	40],
    ['X',	10],
    ['IX',	9],
    ['V',	5],
    ['IV',	4],
    ['I',	1]
  ];

  const res = [];

  reference.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });
  return res.join('');
}

const isValid = (str, int) => {
  let errText = '';

  if(!str || isNaN(int)) {
    errText = "Please enter a valid number";
  } else if (int < 1) {
    errText = "Please enter a number greater than or equal to 1";
  } else if (int > 3999) {
    errText = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  userOutput.innerText = errText;
  return false;
}

const clearOutput = () => {
  userOutput.innerText = '';
};

const updateUI = () => {
  const numStr = userInput.value;
  const int = parseInt(numStr, 10);

  userOutput.classList.remove('hidden');
  clearOutput();

  if (isValid(numStr, int)) {
    userOutput.style.display = 'block';
    userOutput.innerText = convertToRoman(int);
  }
};

convertBtn.addEventListener("click", () => {
  updateUI();
});
