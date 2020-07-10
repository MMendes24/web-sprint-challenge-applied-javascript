// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    /// step one create elements
const headerDiv = document.createElement('div')
const spanDate = document.createElement('span')
const headerLambda = document.createElement('h1')
const spanTemp = document.createElement('span')
const headerContainer = document.querySelector(".header-container")

// step two, add classes
headerDiv.classList.add('header')
spanDate.classList.add('date')
spanTemp.classList.add('temp')

// step three, content of elements
spanDate.textContent = "March 28, 2020"
headerLambda.textContent = "Lambda Times"
spanTemp.textContent = "98°"

// step four, order elements by appending
headerContainer.appendChild(headerDiv)
headerDiv.appendChild(spanDate)
headerDiv.appendChild(headerLambda)
headerDiv.appendChild(spanTemp)
}

Header()
console.log("New Orleans, can you read me on Header?")
