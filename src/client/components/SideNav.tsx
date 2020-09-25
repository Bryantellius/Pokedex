import * as React from "react";
import { IPokemon } from "../utils/Types";

const SideNav: React.FC<ISideNavProps> = (props) => {
  const [filterName, setFilterName] = React.useState<string>("");
  const [filterType, setFilterType] = React.useState<string>("");
  const [filterWeakness, setFilterWeakness] = React.useState<string>("");
  const [tempFilterArray, setTempFilterArray] = React.useState<IPokemon[]>([]);

  const filterPokemonName = (e: string) => {
    setFilterName(e);

    if (e == "" && filterType == "" && filterWeakness == "") {
      props.methods.setFilteredPokemonArray(props.values.pokemonArray);
    } else if (e == "") {
      let tempPokemonArr: IPokemon[] = props.values.pokemonArray.filter(
        (pokemon) =>
          pokemon.type
            .map((t) =>
              t.toLocaleLowerCase().includes(filterType.toLocaleLowerCase())
                ? true
                : false
            )
            .some((value) => value == true)
      );

      tempPokemonArr = tempPokemonArr.filter((pokemon) =>
        pokemon.weaknesses
          .map((w) =>
            w.toLocaleLowerCase().includes(filterWeakness.toLocaleLowerCase())
              ? true
              : false
          )
          .some((value) => value == true)
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    } else {
      setTempFilterArray(props.values.filteredPokemonArray);
      let tempPokemonArr: IPokemon[] = props.values.filteredPokemonArray.filter(
        (pokemon) =>
          pokemon.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    }
  };

  const filterPokemonType = (e: string) => {
    setFilterType(e);

    if (filterName == "" && e == "" && filterWeakness == "") {
      props.methods.setFilteredPokemonArray(props.values.pokemonArray);
    } else if (e == "") {
      let tempPokemonArr: IPokemon[] = props.values.pokemonArray.filter(
        (pokemon) =>
          pokemon.name
            .toLocaleLowerCase()
            .includes(filterName.toLocaleLowerCase())
      );

      tempPokemonArr = tempPokemonArr.filter((pokemon) =>
        pokemon.weaknesses
          .map((w) =>
            w.toLocaleLowerCase().includes(filterWeakness.toLocaleLowerCase())
              ? true
              : false
          )
          .some((value) => value == true)
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    } else {
      let tempPokemonArr: IPokemon[] = props.values.filteredPokemonArray.filter(
        (pokemon) =>
          pokemon.type
            .map((t) =>
              t.toLocaleLowerCase().includes(e.toLocaleLowerCase())
                ? true
                : false
            )
            .some((value) => value == true)
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    }
  };

  const filterPokemonWeakness = (e: string) => {
    setFilterWeakness(e);

    if (filterName == "" && filterType == "" && e == "") {
      props.methods.setFilteredPokemonArray(props.values.pokemonArray);
    } else if (e == "") {
      let tempPokemonArr: IPokemon[] = props.values.pokemonArray.filter(
        (pokemon) =>
          pokemon.name
            .toLocaleLowerCase()
            .includes(filterName.toLocaleLowerCase())
      );

      tempPokemonArr = tempPokemonArr.filter((pokemon) =>
        pokemon.type
          .map((t) =>
            t.toLocaleLowerCase().includes(filterType.toLocaleLowerCase())
              ? true
              : false
          )
          .some((value) => value == true)
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    } else {
      let tempPokemonArr: IPokemon[] = props.values.filteredPokemonArray.filter(
        (pokemon) =>
          pokemon.weaknesses
            .map((w) =>
              w.toLocaleLowerCase().includes(e.toLocaleLowerCase())
                ? true
                : false
            )
            .some((value) => value == true)
      );

      props.methods.setFilteredPokemonArray(tempPokemonArr);
    }
  };

  return (
    <main className="my-2">
      <h2 className="text-center text-dark-secondary p-2 border-bottom border-dark-primary">
        Filter Pokedex
      </h2>
      <div className="row my-4">
        <h3 className="text-center col-12">Name:</h3>
        <div className="col-8 mx-auto my-3">
          <input
            id="filterNameInput"
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              filterPokemonName(e.target.value);
            }}
          />
        </div>
        <h3 className="text-center col-12">Type:</h3>
        <div className="col-8 mx-auto my-3">
          <input
            id="filterTypeInput"
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              filterPokemonType(e.target.value);
            }}
          />
        </div>
        <h3 className="text-center col-12">Weaknesses:</h3>
        <div className="col-8 mx-auto my-3">
          <input
            id="filterWeaknessInput"
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              filterPokemonWeakness(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">
              Filter Results: {props.values.filteredPokemonArray.length}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

interface ISideNavProps {
  values: {
    pokemonArray: IPokemon[];
    filteredPokemonArray: IPokemon[];
  };
  methods: {
    setFilteredPokemonArray: any;
  };
}

export default SideNav;
