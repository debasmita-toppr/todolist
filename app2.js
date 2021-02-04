var elements = [];
var input = document.querySelector("input");

//on load 
window.onload = function () {
    // if localstorage is not empty
    if (JSON.parse(localStorage.getItem("elements")) != null)
    {
        //then get elements from localstorage
        //parse() takes a JSON string and transforms it into a JavaScript object
        elements = JSON.parse(localStorage.getItem("elements"));
        console.log(elements);
        // call display() to display all the elemnts
        display();
    }
};

function del(index) {
    //splice will delete the item at the index and will update the array elements length.
    elements.splice(index, 1);
    // then update the localstorage using setItem
    // stringify() takes a JavaScript object and transforms it into a JSON string.
    localStorage.setItem("elements", JSON.stringify(elements));
    
    // call display() to display all the elemnts 
    display();
}

function display() {
    // empty the list classs div so that every time display() runs it does not print all the items repeatedly
    // all items should be displayed only once
    document.querySelector(".list").innerHTML = "";
    // display newly added items at the beginning
    for (var i = elements.length-1; i >=0 ; i--)
        // append new items to the list
        document.querySelector(".list").innerHTML +=
            "<center><div class='element'>" +
            elements[i] +
        "<img class='dustbin' src = 'user-trash-full-icon.png' onclick='del(" +
            i +
            ")'></div></center><br>";
}

function addElement(){
    //if element is not empty
    if (input.value.trim() != "") {
        // push the element into the array called elements
        elements.push(input.value.trim());
        // if localstorage is not empty
        if (localStorage.getItem("elements") != null) {
            // set or save the elements array in localstorage
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        // call display() to display all the elemnts
        display();
    }
}

