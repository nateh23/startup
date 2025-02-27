import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr className="leaderBoardUser" key={i}>
                    <td className="leaderSlot">{i + 1}</td>
                    <td className="leaderSlot">{score.name.split('@')[0]}</td>
                    <td className="leaderSlot">{score.score}</td>
                </tr>
            );
        }
    } else {
        scoreRows.push(
            <tr key='0'>
                <td colSpan='4'>literally the snail is unbeatable</td>
            </tr>
        );
    }

    return (
        <main>
            <table className="text-muted">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>User</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreRows}
                </tbody>
            </table>
        </main>
    );
}
