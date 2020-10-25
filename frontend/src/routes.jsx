import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Orders from "./pages/Orders";
import Infos from "./pages/Infos";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Orders} />
      <Route path="/infos" component={Infos} />
    </Switch>
  );
}

export default Routes;