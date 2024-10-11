//Create a stopwatch object that has four properties and three methods

const stopwatch = {
    color: 'red',
    size: 'LX',
    brand: 'apple',
    screen: true,
    playMusic: function(){
        console.log('Music is currently playing')
    },
    pause: function(){
        console.log('Timer paused')
    },
    lap: function(){
        console('Lap Finnished')
    }

}


const car = {
    color: 'red',
    brand: 'ford',
    wheels: 4,
    year: 2024,

    drive: function(){
        console.log('you car driving now')
    },
    break: function(){
        console.log('The car has stopped')
    },
    park: function(){
        console.log("you are in park")
    }

}