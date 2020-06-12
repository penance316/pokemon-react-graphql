import React from "react";

import styled from "styled-components";

const StyledMove = styled.div`
  display: flex;
  justify-content: space-between;
  /* Set colour to whatever was passed */
  color: ${(props) => props.colour};
`;

const mapTypeToColour = {
  Normal: "white",
  Fire: "red",
  Fighting: "#A33731",
  Grass: "green",
  Water: "blue",
  Bug: "lightgreen",
  Steel: "slategray",
};

export default function Move({ move }) {
  const colour = mapTypeToColour[move.type];

  return (
    <StyledMove colour={colour}>
      <span>{move.type}</span>
      <span>{move.name}</span>
      <span>{move.damage}</span>
    </StyledMove>
  );
}
