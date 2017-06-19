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
   * @method getFilterNewsSource
   * @param {string} url
   * @return {object} - articles
   */
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