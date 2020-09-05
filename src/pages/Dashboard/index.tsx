import React, {useState, useEffect} from 'react';

import {useAuth} from '../../contexts/AuthContext'
import {getAllUsers} from '../../services/user.api'

const Dashboard: React.FC = () => {
  const {user} = useAuth();



  async function loadUsers(){
    let users = await getAllUsers();
    console.log(users);

  }

return(
  <>
  <h1>Bem vindo, {user && user.name}</h1>

  <button onClick={loadUsers}>click</button>
  </>
);

};

export default Dashboard;
