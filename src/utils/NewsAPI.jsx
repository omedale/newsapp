import axios from 'axios';


export default {
  getSources: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve((res.data.sources));
      })
      .catch((error) => {
        alert('Ooops!!... connection error');
        if (error) reject(error);
      });

    });
  },

  getSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);;
      })
      .catch((error) => {
        alert('Ooops!!... connection error  or news not available');
        if (error) reject(error);
      });
    });
  },

  getTopSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      .catch((error) => {
        alert('Ooops!!... connection error  or news not available');
        if (error) reject(error);
      });
    });
  },


  getLatestSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      .catch((error) => {
        alert('Ooops!!... connection error or news not available');
        if (error) reject(error);
      });
    });
  },

  getPopularSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      .catch((error) => {
        alert('Ooops!!... connection error  or news not available');
        if (error) reject(error);
      });
    });
  },


}