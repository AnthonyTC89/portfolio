import axios from 'axios';

const getCollection = (collection) => {
  axios.get(`api/${collection}`, { withCredentials: true });
};

const delDocument = (collection, id) => {
  console.log('delete in dev', collection, id);
};

export { getCollection, delDocument };
