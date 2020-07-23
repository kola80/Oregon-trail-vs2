class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy =(true)

    }
    hunt (){
this.food +=2
    }
    eat (){
        if (this.food > 0){

    this.food -=2

        }
        else {
            this.isHealthy = (false)
             this.food = 0   
        }

    }
    giveFood(traveler, numberofFoodUnits){
        if (this.food >=numberofFoodUnits){
            this.food -= numberofFoodUnits
        }
    }
}