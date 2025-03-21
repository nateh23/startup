class EventMessage {
    constructor(loser){
        this.loser = loser
    }
}

const BOARD_LENGTH = 5
//i see in simon its built to have multiple handlers but..... why?
class NotifHandler {
    constructor() {
        this.losers = [];
        this.listeners = [];
        let counter = 0
        setInterval(() => {
            counter += 1
            this.receiveLoser("John" + counter)
        }, 500);
    }

    startWithHandlerFunc(handlerFunc){
        this.handler = handlerFunc
    }

    receiveLoser(newLoser){
        if (this.handler){
            this.losers.push(newLoser)
            this.trimLoserBoard()
            // this.debugLosers()
            this.handler(this.losers)
        }
    }

    trimLoserBoard(){
        if (this.losers.length > BOARD_LENGTH) {
            this.losers = this.losers.slice(1,BOARD_LENGTH + 1)
        }
    }

    debugLosers() {
        console.log(this.losers);
    }
}

const notifHandler = new NotifHandler
export {notifHandler}