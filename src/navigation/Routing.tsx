import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { paths } from "./paths";
import PokemonsPage from "../pages/PokemonsPage";
import HomePage from "../pages/HomePage";
import SinglePokemon from "../pages/SinglePokemon"

export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={paths.HOME} component={HomePage}></Route>
        <Route exact path={`${paths.POKEMONS}/:generation`} component={PokemonsPage}></Route>
        <Route path={`${paths.POKEMONS}/:generation/:name`} component={SinglePokemon}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
