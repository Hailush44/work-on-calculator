// DOM Element
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
// set up the time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    if(currentHour === 0){
        currentHour =12;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, "0");
}
setInterval(updateTime, 1000);
updateTime();
// DOM Element
const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");
const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".equal");
const decimalEl = document.querySelector(".decimal");

const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");

var numberElArray = [number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El];

// variables
let valueStrInMemory = null;
let operatorInMemory = null;

// functions
const getValueAsStr = () => {
    const currentValueStr = valueEl.textContent;
    return currentValueStr.split(",").join("");
}
const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
}
const setStrAsValue = (valueStr) => {
    if(valueStr[valueStr.length-1]==="."){
        valueEl.textContent += ".";
        return;
    }
    const [wholeNumStr, decimalStr]= valueStr.split(".");
    if(decimalStr){
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
    }else {
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
}

const handleNumberClick = (numStr) => {
    var currentValueStr = getValueAsStr();
    
    if(currentValueStr === "0"){
        setStrAsValue(numStr);
    }else
    setStrAsValue(currentValueStr + numStr);
};

// Add Event listeners numbers and decimal
for (let i =0; i< numberElArray.length; i++){
    const numberEl = numberElArray[i];
    numberEl.addEventListener("click", ()=> {
        handleNumberClick(i.toString());
    });
}
decimalEl.addEventListener("click", () => {
    const currentValueStr = getValueAsStr();
    if(!currentValueStr.includes(".")){
        setStrAsValue(currentValueStr + ".");
    }
});

// // Event listeners for functions
// acEl.addEventListener("click", () => {
//     setStrAsValue("0");
//     valueStrInMemory = null;
//     operatorInMemory = null;
// });
// pmEl.addEventListener("click", () =>{
//     let currentNum = getValueAsNum();
//     let currentStr = getValueAsStr();
//     if (currentStr === "-0"){
//         setStrAsValue("0");
//         return;
//     } else if(currentNum >= 0){
//         setStrAsValue("-" + currentStr);
//     }else {
//         setStrAsValue(currentStr.substring(1));
//     }
// });
// percentEl.addEventListener("click", () => {
//     let currentVlueNum = getValueAsNum();
//     let newValueNum = currentVlueNum/100;
//     setStrAsValue(newValueNum.toString());
//     valueStrInMemory = null;
//     operatorInMemory = null;
// });

// // Event listeners for operators
// additionEl.addEventListener("click", () => {
//     operatorClick("addition");
// });
// subtractionEl.addEventListener("click", () => {
//     operatorClick("subtraction");
// });
// multiplicationEl.addEventListener("click", () => {
//     operatorClick("multiplication");
// });
// divisionEl.addEventListener("click", () => {
//     operatorClick("division");
// });

// equalEl.addEventListener("click", () => {
//     if (valueStrInMemory){
//         setStrAsValue(resultOperationStr());
//         valueStrInMemory = null;
//         operatorInMemory = null;
//     }
// });

// // Handling operation on click
// const operatorClick = (operation) => {
//     const currentValueStr = getValueAsStr();
//     if(!valueStrInMemory){
//         valueStrInMemory = currentValueStr;
//         operatorInMemory = operation;
//         setStrAsValue("0");
//         return;
//     }
//     const valueNumInMemory = parseFloat(valueStrInMemory);
//     valueNumInMemory = resultOperationStr();
//     setStrAsValue("0");
// };

// // function for calculation
// const resultOperationStr = () => {
//     let currentNumValue = getValueAsNum();
// const valueNumInMemory = parseFloat(valueStrInMemory);
// let newValueNum;
// if (operatorInMemory === "addition"){
//     newValueNum = valueNumInMemory + currentNumValue;
// } else if (operatorInMemory === "subtraction"){
//     newValueNum = valueNumInMemory - currentNumValue;
// } else if (operatorInMemory === "multiplication"){
//     newValueNum = valueNumInMemory * currentNumValue;
// }else if(operatorInMemory === "division"){
//     newValueNum = valueNumInMemory/currentNumValue;
// }
// return newValueNum.toString();
// }