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


axios.get(articleData)
.then( (value) => {

        const articleOne = value.data.articles.bootstrap[0]
        const articleTwo = value.data.articles.bootstrap[1]
        const articleThree = value.data.articles.bootstrap[2]
        const articleFour = value.data.articles.javascript[0]
        const articleFive = value.data.articles.javascript[1]
        const articleSix = value.data.articles.javascript[2]
        const articleSeven = value.data.articles.javascript[3]
        const articleEight = value.data.articles.jquery[0]
        const articleNine = value.data.articles.jquery[1]
        const articleTen = value.data.articles.jquery[2]
        const articleEleven = value.data.articles.node[0]
        const articleTwelve = value.data.articles.node[1]
        const articleThirteen = value.data.articles.technology[0]
        const articleFourteen = value.data.articles.technology[1]

    function articleMaker(article){
    const cardCon = document.querySelector('.cards-container')
    const card = document.createElement('div')
    card.classList.add('card')
    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = article.headline
    const author = document.createElement('div')
    author.classList.add('author')
    const imgCon = document.createElement('div')
    imgCon.classList.add('img-container')
    const imgAuth = document.createElement('img')
    imgAuth.src = article.authorPhoto
    const name = document.createElement('span')
    name.textContent = article.authorName

    cardCon.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    card.appendChild(name)
    author.appendChild(imgCon)
    imgCon.appendChild(imgAuth)
    card.addEventListener('click', () => {
        console.log(card);
    })
    }
    articleMaker(articleOne)
    articleMaker(articleTwo)
    articleMaker(articleThree)
    articleMaker(articleFour)
    articleMaker(articleFive)
    articleMaker(articleSix)
    articleMaker(articleSeven)
    articleMaker(articleEight)
    articleMaker(articleNine)
    articleMaker(articleTen)
    articleMaker(articleEleven)
    articleMaker(articleTwelve)
    articleMaker(articleThirteen)
    articleMaker(articleFourteen)
})
.catch()


