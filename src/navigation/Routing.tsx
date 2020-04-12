import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Paths } from "./Paths";
import PokemonsPage from "../pages/PokemonsPage";
import HomePage from "../pages/HomePage";
import SinglePokemon from "../pages/SinglePokemon";


const Routing: React.SFC = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={`${Paths.POKEMONS}/:generation/:name`}
          component={SinglePokemon}
        ></Route>
        <Route
          path={`${Paths.POKEMONS}/:generation`}
          component={PokemonsPage}
        ></Route>
        <Route exact path={Paths.HOME} component={HomePage}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
