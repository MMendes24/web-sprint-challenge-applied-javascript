// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const articleData = 'https://lambda-times-backend.herokuapp.com/articles'
console.log(articleData)

function articleMaker (dataObj) {
axios.get(dataObj)
.then( (value) => {
  //step one, instantiate
    const cardsContainer = document.querySelector('.cards-container')
    const card = document.createElement('div')
    card.classList.add('card')
    const headline = document.createElement('div')
    const headlineText = value.data.articles.bootstrap[0].headline
    headline.textContent = headlineText
    headline.classList.add('headline')

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const imgAuth = document.createElement('img')
    const name = document.createElement('span')

    //step two, appending
    cardsContainer.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(imgAuth)
    card.appendChild(name)


    return console.log(card)
})
.catch()
}

console.log(articleMaker(articleData))