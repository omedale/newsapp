import axios from 'axios';

export default {
  getSources: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve((res.data.sources));
      })
      .catch((error) => {
        if (error) reject(error);
      });
    });
  },

  getFilterNewsSource(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      .catch((error) => {
        reject(error.response);
      });
    });
  },
};