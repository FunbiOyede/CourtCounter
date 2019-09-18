import React from "react";

const DisplayTeam = props => {
  console.log(props);
  return (
    <div>
      {props.Teams.map((team, index) => (
        <div key={index}>
          <p>{team}</p>
          <div>
            <button>+3 POINTS</button>
            <button>+2 POINTS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTeam;
