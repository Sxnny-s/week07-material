//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const api = 'aOBpziLRPFagJq7dNZ0BaoS33qILiBaj9PBCl3fq'

const date = document.querySelector('button').addEventListener('click', getPic)
const input = document.querySelector('input')

function getPic(){

    const dateValue = input.value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${dateValue}`)
    
        .then(res => res.json())
        .then(data => {
            console.log(data.title)
            document.querySelector('h2').innerText = `Name: ${data.title}`
            document.querySelector('h3').innerText = `Description: \n ${data.explanation}`
            document.querySelector('img').src = `${data.hdurl}`
        })
        .catch(err => {
            console.log(`error ${err}`)
    
        })
    }