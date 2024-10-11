//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM



// document.querySelector('button').addEventListener('click', getCocktail)

function getCocktail(){

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0].strDrink)
            console.log(data.drinks[0].strDrinkThumb)
            console.log(data.drinks[0].strInstructions)
            
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
     
}


getCocktail()