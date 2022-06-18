import { AxiosResponse } from "axios";
import { pokeApi } from "../api";
import { Pokemon } from "../models";

export const getPokemonData = async (params: string) => {
  const { data: pokemon }: AxiosResponse<Pokemon> = await pokeApi.get(
    `/pokemon/${params}`
  );

  return pokemon;
};

