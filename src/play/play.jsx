import React from 'react';

import './play.css';

export function Play() {
    return (
        <main>
            <div className="gameInfo">
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
                    <i className="response">Snail used ____</i>
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