import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";

const App: React.FC<IAppProps> = () => {
  const [pokemonArray, setPokemonArray] = React.useState<IPokemon[]>([]);
  const [filteredPokemonArray, setFilteredPokemonArray] = React.useState<
    IPokemon[]
  >([]);

  const getPokedex = async () => {
    try {
      let result = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      let { pokemon } = await result.json();
      console.log(pokemon);
      setPokemonArray(pokemon);

      setFilteredPokemonArray(pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPokedex();
  }, []);

  return (
    <BrowserRouter>
      <div className="row no-gutters">
        <div id="homeDivNavbar" className="col-sm-3">
          <Navbar
            values={{ pokemonArray, filteredPokemonArray }}
            methods={{ setFilteredPokemonArray }}
          />
        </div>
        <div id="homeDivPokedexShowcase" className="col-sm-9">
          <Switch>
            <Route>
              <Home values={{ pokemonArray, filteredPokemonArray }} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export interface IAppProps {}

interface IPokemon {
  avg_spawns: number;
  candy: string;
  candy_count: number;
  egg: string;
  height: string;
  id: number;
  img: string;
  multipliers: Array<number>;
  name: string;
  next_evolution: Array<any>;
  num: string;
  spawn_chance: number;
  spawn_time: string;
  type: Array<string>;
  weaknesses: Array<string>;
  weight: string;
}

export default App;
