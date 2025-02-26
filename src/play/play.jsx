import React from 'react';

import './play.css';
import {Snail} from './snail.js'

export function Play() {
    const [userChoice,changeUserChoice] = React.useState("no choice")
    const [snailChoice,changeSnailChoice] = React.useState("no choice")
    const [snailResponseVisual,changeSnailDisplay] = React.useState("A Snail Approaches")

    const weaknessLib = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    };

    function getCurrentWins() {
        return localStorage.getItem("wins") || 0
    }

    function addWin() {
        changeWins(getCurrentWins() + 1)
        localStorage.setItem("wins",currentWins)
    }

    function resetWins(){
        localStorage.setItem("wins",0)
    }

    function evalWin(){
        if (snailChoice == weaknessLib[userChoice]){
            addWin()
            changeSnailDisplay("Snail used " + snailChoice + " and got cooked")
        }else if(snailChoice == userChoice){
            changeSnailDisplay("You both used " + snailChoice + " and got confused")
        }else{
            changeSnailDisplay("Snail wrecked you with " + snailChoice)
            resetWins()
        }
    }

    function runRound(input){
        changeUserChoice(input)
        changeSnailChoice(Snail.makeChoice())
        evalWin()
    }

    return (
        <main>
            <div className="gameInfo flexContainer">
                <div className="updateBox">
                    <ul>
                        <li className="losingPlayer">John lost to the snail</li>
                        <li className="losingPlayer">Bobby lost to the snail</li>
                        <li className="losingPlayer">Maurice lost to the snail</li>
                    </ul>
                </div>
    
                <div className="currentScore">
                    <label className="text-muted">Current Score</label>
                    <input className="input-group mb-3 inputRight fancyBox text-muted" type="text" id="count" value="0" readOnly />
                </div>
            </div>

            <div className="game">
                <div className="snailResponse">
                    <img className="mainGraphic" alt="test" src="./basicRender.png"/>
                    <i className="response">{snailResponseVisual}</i>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button className="img-button option" onClick={() => runRound("rock")}><img alt="rock" src="./rock.png"/></button>
                            </td>
                            <td>
                                <button className="img-button option" onClick={() => runRound("paper")}><img alt="paper" src="./paper.png"/></button>
                            </td>
                            <td>
                                <button className="img-button option" onClick={() => runRound("scissors")}><img alt="scissors" src="./scissors.png"/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}