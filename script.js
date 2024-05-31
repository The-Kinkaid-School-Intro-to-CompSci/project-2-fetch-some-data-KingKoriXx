function runProgram(){

    console.log('runProgram');
    console.log('Button was clicked');
    //your code goes here
    let button = document.querySelector("#startButton")
    button.addEventListener('click', bClick)
}
document.addEventListener('DOMContentLoaded', runProgram);

function bClick(){
    console.log("button clicked");
    let userInput = document.querySelector("#userInput");
    console.log (userInput.value);
    getUniversity(userInput.value);
}

async function getUniversity(userInputTerm){
    console.log('Running getUniversity')
    let list = document.querySelector("#responseContainer");
    console.log (list);
    let uniData = null
    const uniURL = `http://universities.hipolabs.com/search?name=${userInputTerm}&country=United+States`
    const response = await fetch(uniURL)
    console.log(response);
    uniData = await response.json();
    console.log(uniData)
    // let newP = document.createElement("p");
    // newP.textContent = `${uniData}`;

    // list.appendChild(newP)
    for (let i = 0 ; i< uniData.length; i++){
        console.log(i);
        let currentUni = uniData[i];
        console.log(currentUni.web_pages[0]);
        let newP = document.createElement("p");
        newP.textContent = `${currentUni.name}`;
    
        list.appendChild(newP)
    }
    
}

// let unidata ={unidata,name}uhjy7,i9-



