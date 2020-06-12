import React from "react";
import styled from "styled-components";

import Move from "./Move";

const StyledPokemon = styled.div`
  font-family: "Press Start 2P", cursive;

  background-color: #ffbb00;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  min-width: 400px;
  padding: 20px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex: 1;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 250px;
  margin-bottom: 20px;
  flex: 1;
`;

const StyledMoves = styled.div`
  max-height: 200px;
  flex: 1;
  & > hr {
    border: 1px solid orange;
    width: 100%;
  }
`;

export default function Pokemon({ pokemon }) {
  // Shift to map array item to obj.
  const fastMove = pokemon.attacks?.fast.slice(0, 1).shift();
  const specialMove = pokemon.attacks?.special.slice(0, 1).shift();

  return (
    <StyledPokemon>
      <Header>
        <span>{pokemon.number}</span>
        <span>{pokemon.name}</span>
        <span>{pokemon.maxHP} HP</span>
      </Header>
      <Image src={pokemon.image} alt={pokemon.name} />
      <StyledMoves>
        <Move move={fastMove} />
        <hr />
        <Move move={specialMove} />
      </StyledMoves>
    </StyledPokemon>
  );
}
