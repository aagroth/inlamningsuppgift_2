// Declaration of both lists
const incomeList = [];
const costsList = [];
var sumValue = 0;


// Function that adds both description and value input and put it in to incomeList or costsList
// It will depend on if the user choose "+" or "-". Each time a user use both inputs
// the function will create a object with the variable inputText and inputNumber.
function addDescriptionAndValue(event) {
    event.preventDefault();

    var inputText = document.querySelector(".inputDescription").value
    var inputNumber = document.querySelector(".inputValue").value
    var operator = document.querySelector(".operator").value

    if(inputText == "" || inputNumber == "") {
        alert("Write something to add a post.")
    }

    else {
        var obj = {description: inputText, value: Number(inputNumber)}

        if(operator == "plus") {     
            incomeList.push(obj)
            
            var list = document.querySelector(".incomeList")
            list.appendChild(createListElement(obj))
            
            sumValue += obj.value 
        }

        else if (operator == "minus") {
            costsList.push(obj)
            var list = document.querySelector(".costsList")
            list.appendChild(createListElement(obj))

            sumValue -= obj.value 
        }

        const totalSum = document.querySelector(".resultOfLists")
        totalSum.textContent = sumValue
    } 
}

// Activates the function on click
document.querySelector(".addValueToList").addEventListener("click", addDescriptionAndValue);

// This function is used in the addDescriptionAndValue function and creates
// a new li and writes out the object description and value. 
function createListElement(obj) {
    var li = document.createElement("li")
    li.textContent = obj.description + " " + obj.value;
    return li
}