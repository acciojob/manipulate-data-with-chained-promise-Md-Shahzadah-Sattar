//your JS code here. If required.
function manipulateArray(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

function filterOddNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = arr.filter((num) => num % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = arr.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedArray);
    }, 2000);
  });
}

const outputElement = document.getElementById("output");

const inputArray = [1, 2, 3, 4];

manipulateArray(inputArray)
  .then((result) => {
    outputElement.textContent = `Original Array: [${result.join(", ")}]`;
    return filterOddNumbers(result);
  })
  .then((result) => {
    outputElement.textContent = `Filtered Array (Even Numbers): [${result.join(", ")}]`;
    return multiplyEvenNumbers(result);
  })
  .then((result) => {
    outputElement.textContent = `Final Result: [${result.join(", ")}]`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
