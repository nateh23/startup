const BOARD_LENGTH = 5

class EventMessage {
    constructor(loser) {
        this.loser = loser;
    }
}

class NotifHandler {
    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.losers = [];

        //for debugging
        // this.socket.onopen = () => {
        //     console.log("connected to socket")
        // };
        
        this.socket.onmessage = async (loserMsg) => {
            try {
                const event = JSON.parse(await loserMsg.data.text());
                this.receiveLoser(event.loser);
            } catch {}
        };
    }

    startWithHandlerFunc(handlerFunc){
        this.handler = handlerFunc
    }

    broadcastLoser(newLoser) {
        const loserEvent = new EventMessage(newLoser);
        this.socket.send(JSON.stringify(loserEvent));
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