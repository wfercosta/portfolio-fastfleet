import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import OrdersList from '../pages/OrdersList';
import DeliverymenList from '../pages/DeliverymenList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/orders" exact>
        <OrdersList />
      </Route>
      <Route path="/deliverymen" exact>
        <DeliverymenList />
      </Route>
    </Switch>
  );
}

export default Routes;
