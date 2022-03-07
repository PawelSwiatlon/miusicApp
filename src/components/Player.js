import React from "react";

const Player = () => {
    return(
        <div className="player-container">
            <div className="player-controller">
                <p>Start time</p>    
                <input type="range" name="time" id="" />
                <p>End time</p>
            </div>
            <div className="player-control">
                <button>Prev</button>
                <button>Play</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default Player;