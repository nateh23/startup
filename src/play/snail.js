export class Snail {
    options = ["rock","paper","scissors"]

    constructor(){

    }

    makeChoice(){
        return this.options[Math.floor(Math.random() * this.options.length)]
    }
}