import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const logged = false;

  return logged ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;