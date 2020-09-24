import * as React from "react";

const Home: React.FC<IHomeProps> = () => {
  const [pokedex, setPokedex] = React.useState<any>(null);

  const getPokedex = async () => {
    try {
      let r = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      let index = await r.json();
      console.log(index);
      setPokedex(index);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPokedex();
  }, []);

  return (
    <main className="container my-5">
      <div className="row row-cols-1 row-cols-md-4">
        {pokedex?.pokemon.map((p: IPokemon) => {
          return (
            <div className="col mb-4" key={p.id}>
              <div className="card">
                <div className="card-img-top d-flex justify-content-center">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="card-body">
                  <h3 className="card-title text-center">{p.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export interface IHomeProps {}

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

export default Home;
