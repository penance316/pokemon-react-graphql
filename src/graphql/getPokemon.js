import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      maxHP
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
