import * as React from "react";
import { IPokemon } from "../utils/Types";

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <main className="container my-5">
      <div className="row row-cols-1 row-cols-md-4">
        {props.values.filteredPokemonArray?.map((p: IPokemon) => {
          return (
            <div className="col mb-4" key={p.id}>
              <div className="card h-100 pokemonCard">
                <div className="card-img-top d-flex justify-content-center">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="card-body">
                  <h3 className="card-title text-center">{p.name}</h3>
                  <h6>Num:</h6>
                  <p>{p.num}</p>
                  <h6>Types:</h6>
                  <ul className="list-group my-2">
                    {p.type.map((t, index) => (
                      <li key={index} className="list-group-item">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <h6>Weaknesses:</h6>
                  <ul className="list-group my-2">
                    {p.weaknesses.map((w, index) => (
                      <li key={index} className="list-group-item">
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export interface IHomeProps {
  values: {
    pokemonArray: Array<IPokemon>;
    filteredPokemonArray: Array<IPokemon>;
  };
}

export default Home;
