const BOARD_LENGTH = 5
//i see in simon its built to have multiple handlers but..... why?
class NotifHandler {
    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.losers = [];

        this.socket.onopen = () => {
            console.log("connected to socket")
        };
        
        this.socket.onmessage = async (loser) => {
            console.log("receiving message")
            try {
                const event = JSON.parse(await loser.text());
                console.log("event")
                this.receiveLoser(event);
            } catch {
                console.log("receiving failed : (")
            }
        };
        
        //debug
        // let counter = 0
        // setInterval(() => { //the debug loop for fake users
        //     counter += 1
        //     this.receiveLoser("John" + counter)
        // }, 500);
    }

    startWithHandlerFunc(handlerFunc){
        this.handler = handlerFunc
    }

    broadcastLoser(newLoser) {
        this.socket.send(JSON.stringify(newLoser));
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