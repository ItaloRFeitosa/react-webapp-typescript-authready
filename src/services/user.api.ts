
import api from './api';

export async function getAllUsers(){
  try {
    const response = await api.get('users')
    return response;
  } catch(error) {
    return error
  }
}
