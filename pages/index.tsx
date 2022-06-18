// next libraries
import type { NextPage } from "next";
import { GetStaticProps } from "next";

// libraries
import { AxiosResponse } from "axios";

// api
import { pokeApi } from "../api";

// models
import { PokemonListResponse, PokemonListResult } from "../models";

// components
import { Layout, PokemonCard } from "../components";
import { Grid } from "@nextui-org/react";

interface Props {
  pokemons: PokemonListResult[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon List">
      <Grid.Container gap={2} justify="center">
        {
          pokemons.map((pokemon) => <PokemonCard {...pokemon} key={pokemon.id} />)
        }
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { results },
  }: AxiosResponse<PokemonListResponse> = await pokeApi.get(
    "/pokemon?limit=151"
  );

  const pokemons = results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
