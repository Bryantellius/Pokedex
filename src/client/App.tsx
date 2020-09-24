import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from './components/Navbar';

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <div className="row no-gutters">
        <div id="homeDivNavbar" className="col-sm-3">
          <Navbar />
        </div>
        <div id="homeDivPokedexShowcase" className="col-sm-9">
          <Switch>
            <Route>
              <Home />
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
