let messageEl= document.getElementById("message-el")
let cardsEl= document.getElementById("cards-el")
let sumEl= document.getElementById("sum-el")
let cards=[]
let sum =0
let firstCard =0
let secondCard =0
let isAlive =false
let blackjack =false
let message=""
let playersEl = document.getElementById("players-el")
playersEl.textContent="ARYAN : $"+"720"
function getRandom()
{
    let num = Math.ceil(Math.random()*13)
    if(num===1)
    {
        return 11
    }
    else if(num>=11 && num<=13)
    {
        return 10
    }
    else
    return num
}
function renderGame()
{   
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent="Cards : "
    for(let i=0;i<cards.length;i+=1)
    {
        cardsEl.textContent+= cards[i]+" "
    }
    if(sum<21)
    {
        message="Do you Want to draw a new card ?"
    }
    else if(sum===21)
    {
        message="Whoo!! you Won Its a Blackjack"
        blackjack=true
    }
    else{
        message="You lost it's a bust"
        isAlive =false
    }
    messageEl.textContent = message
}
function startGame()
{
    
    firstCard = getRandom()
    secondCard = getRandom()
    sum = firstCard+secondCard
    cards=[firstCard,secondCard]
    isAlive=true
    blackjack=false
    
    renderGame()
}
function newCard()
{
    if(isAlive===true && blackjack===false)
    {
        let cardd=getRandom()
        cards.push(cardd)
        sum+=cardd
        renderGame()
    }
}