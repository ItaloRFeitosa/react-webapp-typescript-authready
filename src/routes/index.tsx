import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useAuth} from '../contexts/AuthContext';

const Routes: React.FC = () => {
  const {isLogged} = useAuth();

  return isLogged ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;
