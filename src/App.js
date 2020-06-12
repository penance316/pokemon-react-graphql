import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./containers/PokemonsContainer";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonsContainer></PokemonsContainer>
    </ApolloProvider>
  );
}

export default App;
