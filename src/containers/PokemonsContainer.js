import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/getPokemon";
import Pokemon from "../components/Pokemon";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-width: 900px;
  margin: auto;
  & > div {
    box-sizing: border-box;
    margin: 20px;
  }
`;

export default function PokemonsContainer() {
  const { data: { pokemons = [] } = {}, loading, error } = useQuery(
    GET_POKEMONS,
    {
      variables: { first: 20 },
    }
  );

  if (loading) return "Loading...";
  if (error) return `ERROR occured ${error.message}`;

  return (
    <Container>
      {pokemons &&
        pokemons.map((mon) => <Pokemon key={mon.id} pokemon={mon}></Pokemon>)}
    </Container>
  );
}
