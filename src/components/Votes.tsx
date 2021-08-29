import {useState} from "react";

export default function Votes() {
    const [pbVote, setPbVote] = useState(0); 
    const [vanillaVote, setVanillaVote] = useState(0); 
    const [pecanVote, setPecanVote] = useState(0); 

    let totalVotes = pbVote + vanillaVote + pecanVote;
    // let showStats = document.querySelector(".flavor-stats").style.visibility="hidden";
    // totalVotes = 0 ? "x" : "y";

    let pbPercentage = ((pbVote / totalVotes) * 100).toFixed(2);
    let vanillaPercentage = ((vanillaVote / totalVotes) * 100).toFixed(2);
    let pecanPercentage = ((pecanVote / totalVotes) * 100).toFixed(2);
    
    return (
        <>
            <h2>Vote Here</h2>
            <button onClick={(event) => {setPbVote(prv => prv + 1)}}>Peanut Butter</button>
            <button onClick={(event) => {setVanillaVote(prv => prv + 1)}}>Vanilla</button>
            <button onClick={(event) => {setPecanVote(prv => prv + 1)}}>Butter Pecan</button>

            {totalVotes <= 0 && <div>
                <p>No votes yet.</p>
            </div>}

            {pbVote > 0 && <div className="flavor-stats">
                <div className="flavor-stats__votes">
                    <h3>Peanut Butter</h3>
                    <p className="vote-total">{pbVote}</p>
                    <p className="vote-percentage">({pbPercentage})%</p>
                </div>
                <div className="bar" style={{width: pbPercentage+"%", backgroundColor: "#cd9141"}}>&nbsp;</div>
            </div>}

            {vanillaVote > 0 && <div className="flavor-stats">
                <div className="flavor-stats__votes">
                    <h3>Vanilla</h3>
                    <p className="vote-total">{vanillaVote}</p>
                    <p className="vote-percentage">({vanillaPercentage})%</p>
                </div>
                <div className="bar" style={{width: vanillaPercentage+"%", backgroundColor: "#fbf4e1"}}>&nbsp;</div>
            </div>}

            {pecanVote > 0 && <div className="flavor-stats">
                <div className="flavor-stats__votes">
                    <h3>Butter Pecan</h3>
                    <p className="vote-total">{pecanVote}</p>
                    <p className="vote-percentage">({pecanPercentage})%</p>
                </div>
                <div className="bar" style={{width: pecanPercentage+"%", backgroundColor: "#f9f2f2"}}>&nbsp;</div>
            </div>}
        </>
    )
};