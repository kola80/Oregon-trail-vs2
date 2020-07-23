class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }


    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(travelers) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(travelers)

        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }
        }
    }

        totalFood(){
            let totalNumber = 0
            for (let index = 0; index < this.passengers.length; index++) {
                totalNumber += this.passengers[index].food
            }
            return totalNumber
        }
    }

