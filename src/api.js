import axios from 'axios';

const getCollection = async (collection) => {
  return axios.get(`api/${collection}`, { withCredentials: true })
      .then((response) => {
        console.log('response: ', response);
        return response.data;
      })
      .catch((error) => {
        console.log('error: ', error);
        return error;
      });
}

export { getCollection };
