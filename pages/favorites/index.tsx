import { useEffect, useState } from "react";
import { Layout, NoFavorites, RenderIf } from "../../components";
import { localFavorites } from "../../utils";
import { FavoritesPokemons } from "../../components/pokemon/FavoritesPokemons/index";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritePokemons] = useState<number[]>([]);
  
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites Pokemons">
      <RenderIf isTrue={favoritesPokemons.length === 0}>
        <NoFavorites />
      </RenderIf>

      <RenderIf isTrue={favoritesPokemons.length > 0}>
        <FavoritesPokemons pokemons={favoritesPokemons} />
      </RenderIf>
    </Layout>
  );
};

export default FavoritesPage;
