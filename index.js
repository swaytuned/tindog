"use strict"

import Dogs from "./dog.js"
import dogsData from "./data.js"

let currentDogIndex = 0;
let currentDog = new Dogs(dogsData[currentDogIndex])

document.getElementById("heart").addEventListener("click", liked)
document.getElementById("swipe").addEventListener("click", swipe)
document.getElementById("home").addEventListener("click", home)
render()

function render(){
    document.getElementById("profile").innerHTML = currentDog.getDogHtml()
}


//get new dog
function getNewDog(){
    if( Dogs.length < currentDogIndex){
        document.getElementById("profile").innerHTML = 
        `<div class="no-more">
            <h3 class="end-matches" style="font-weight:600; font-size:32px; text-align:center;">
                There are no more dogs in your area🦴🐶 
            </h3>
        </div>`
    }else{
        currentDogIndex += 1
        currentDog = new Dogs(dogsData[currentDogIndex])  
            render()
    }
    
}

// like button
function liked(){
    document.getElementById("profile").innerHTML += `
        <div class="result-icon">
            <img src="./images/badge-like.png"></img>
        </div>
        ` 

    setTimeout(()=> {
        currentDog.setMatchStatus(true)
        getNewDog() 
    }, 1500)

    
}

// Swipe button
function swipe() {
    document.getElementById("profile").innerHTML +=  `
        <div class="result-icon">
            <img src="./images/badge-nope.png"></img>
         </div>
        `

    setTimeout(()=> {
        currentDog.setMatchStatus(true)
        getNewDog()        
    }, 1500)

    
}

function home(){
    currentDogIndex = 0
    currentDog = new Dogs(dogsData[currentDogIndex])  
            render()
}

