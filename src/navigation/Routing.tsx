import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { paths } from "./paths";
import PokemonsPage from "../pages/PokemonsPage";
import HomePage from "../pages/HomePage";

export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={paths.HOME} component={HomePage}></Route>
        <Route path={`${paths.POKEMONS}/:generation`} component={PokemonsPage}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
