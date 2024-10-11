//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

class Fighter{
    constructor(name,heath,specialMove,taunt){
        this.name = name
        this.health = health
        this.specialMove = specialMove
        this.taunt = taunt
    }
    useSpecialMove(){
        console.log(`${this.name} used ${this.specialMove}`)
    }
    

}
