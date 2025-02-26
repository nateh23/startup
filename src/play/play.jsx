import React from 'react';

import './play.css';
import { Button } from 'react-bootstrap';

export function Play() {
    const [userChoice,changeUserChoice] = React.useState("no choice")
    const [snailChoice,changeSnailChoice] = React.useState("no choice")
    const [snailResponseVisual,changeSnailDisplay] = React.useState("A Snail Approaches")
    const [currentWins,changeWins] = React.useState(0)

    async function snailDecide(){

    }

    async function addWin() {
        console.log("ay")
        changeWins(currentWins + 1)
        localStorage.setItem("wins",currentWins)
    }

    async function resetWins(){
        localStorage.setItem("wins",0)
        changeWins(localStorage.getItem("wins"))
    }

    async function evalWin(){

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
                                <button className="img-button option"><img alt="rock" src="./rock.png"/></button>
                            </td>
                            <td>
                                <button className="img-button option"><img alt="paper" src="./paper.png"/></button>
                            </td>
                            <td>
                                <button className="img-button option"><img alt="scissors" src="./scissors.png"/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}