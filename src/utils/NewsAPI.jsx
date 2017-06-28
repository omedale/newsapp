import axios from 'axios';

export default {
/**
   * Fetches articles from base on the url supplied
   * @method getSources
   * @param {string} url
   * @return {object} - sources
   */
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
/**
   * Fetches articles from base on the url supplied
   * @method getFilterNewsArticle
   * @param {string} url
   * @return {object} - articles
   */
  getFilterNewsArticle(url) {
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
/**
   * Verifies users with token and return callback
   * @method verifyUser
   * @param {string} tokenID
   * @param {function} callback
   * @return {void} - a boolean
   */
  verifyUser(tokenID, callback) {
    axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${tokenID}`)
       .then(() => {
         callback(true);
       })
       .catch(() => {
         callback(false);
       });
  },

  getAllSources(){
    return new Promise((resolve, reject) => {
      axios.get('https://newsapi.org/v1/sources?language=en')
      .then((res) => {
        resolve((res));
      })
      .catch((error) => {
        if (error) reject(error);
      });
    });
  },
};