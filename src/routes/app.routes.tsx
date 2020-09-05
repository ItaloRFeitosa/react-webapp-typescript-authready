import React from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import Header from '../components/Header';

import {useAuth} from '../contexts/AuthContext'

const AppRoutes: React.FC = () => {
  const {logout} = useAuth();
  const history = useHistory();
  return(
    <BrowserRouter>
      <Header handleLogout={logout}/>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>

      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
