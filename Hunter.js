class Hunter extends Traveler {
    constructor(name){
    super(name)
        this.food = 2
    }
    hunt(){
        this.food +=5

    }
    eat(){
        if (this.food <2 ){
            this.isHealthy = false
            this.food = 0
        }
this.food -=2

    }
    giveFood(traveler,numofFood){
if (this.food > numofFood ){
    this.food -= numofFood
    traveler.food += numofFood
}
        
    }
    
}