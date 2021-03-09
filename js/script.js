const quotes = [
    ["IT ALWAYS SEEMS IMPOSSIBLE UNTIL IT'S DONE", 'Nelson Mandela', '#7CA5B8'], 
    ["DO NOT JUDGE ME BY MY SUCCESSES, JUDGE ME BY HOW MANY TIMES I FELL DOWN AND GOT BACK UP AGAIN.", 'Nelson Mandela', '#a9dbb8'],
    ['We are not makers of history. We are made by history.', 'Martin Luther King Jr.', '#d4b83' ], 
    ['Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.', 'Martin Luther King Jr.', '#c1666b'],
    ['But the ultimate lesson is just sit down and write. That’s all.', 'Wole Soyinka.', '#d4b483'], 
    ['But when you’re deprived of it for a lengthy period then you value human companionship. But you have to survive and so you devise all kinds of mental exercises and it’s amazing.', 'Wole Soyinka.', '#c1666b '],
    ['A baby can heal broken hearts.', 'Tyler Perry', '#2e4052'],
    ['Be aware of the darkness but your focus should always be the light.', 'Tyler Perry', '#2e6b52'],
    ['Do what you have to do, to do what you want to do.', 'Denzel Washington', '#a86baa'],
    ['Don’t aspire to make a living, aspire to make a difference.', 'Denzel Washington', '#a86ee2'],
    ['My faith helps me understand that circumstances don’t dictate my happiness, my inner peace.', 'Denzel Washington', '#a86112']
];

// const colours=[ '#7CA5B8', '#a9dbb8', '#d4b83', '#c1666b', '#d4b483', '#c1666b ', '#2e4052'];

//Get all the necessary elements
const pageBg = document.querySelector(".page-bg");
const quoteText = document.querySelector("#quoteText");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

//Bind an eventlistener
btn.addEventListener("click", getQuote);

//Generate a random number
function getQuote() {
    let randomQuoteIndex;
    do {
        randomQuoteIndex = Math.floor(Math.random() * quotes.length); 
    } while (quotes[randomQuoteIndex][1] == author.textContent );
    // let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    // let randomColorIndex = Math.floor(Math.random() * colours.length);

    let randomQuote = quotes[randomQuoteIndex][0];
    let randomAuthor = quotes[randomQuoteIndex][1];
    let randomColor = quotes[randomQuoteIndex][2];


    //pass new text content to each element
    // author.innerHTML= "Awesome";
    // quoteText.innerHTML= "I am awesome";
    pageBg.style.backgroundColor = randomColor;
    quoteText.textContent = randomQuote;
    btn.style.backgroundColor = randomColor;
    author.textContent = randomAuthor;

}   
    // btn.addEventListener("click", ()=>{author.innerHTML= "Awesome";
    // quoteText.innerHTML= "I am awesome"})


// let randomColorIndex = Math.floor(Math.random() * colours.length);
// let randNm = Math.random();
// let randNmLength = 