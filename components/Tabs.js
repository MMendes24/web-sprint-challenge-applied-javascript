// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//Step one: invoke axios, lord of libraries
const tabData = 'https://lambda-times-backend.herokuapp.com/topics'
const tabTopics = document.querySelector('.topics')
//Step two: test axios
// test successful via HTTPie
console.log(tabData)
//Step three:
axios.get(tabData)
.then((value) => {
    const tabWeb = value.data.topics
    tabWeb.forEach( (tab) => {
        tab = document.createElement('div')
        tab.classList.add('tab')
        tab.textContent = value.data.topics
        tabTopics.appendChild(tab)
    })
})    
.catch( () => {
    console.log("No, New Orleans, you went dark.")
});

console.log("New Orleans, can you read me on Tabs?")