import React from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import NotFound from './notFound'


export function getRoutes(store) {
  
  return (
    //<Router>
    <Switch>
        <Route path="/" component={App} />

        <Route>
            <Route path="*" component={NotFound} />
        </Route>
    </Switch>
    //</Router>
  );
}
