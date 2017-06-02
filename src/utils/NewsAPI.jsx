import axios from 'axios';


export default {
  getSources: (url) => {
    return new Promise((resolve, reject) => {
     axios.get(url)
      .then(res => {
          resolve((res.data.sources));
            console.log("data sent");
      })
      .catch(function(error){
          alert("Ooops!!... connection error");
          console.log(error);
         if (error) reject(error);
      });

    });
  },

  getSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
          resolve(res.data.articles);
           //console.log(res.data.articles);
      })
      .catch(function(error){
          alert("Ooops!!... connection error  or news not available");
          console.log(error);
         if (error) reject(error);
      });
    });
  },

   getTopSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
          resolve(res.data.articles);
      })
      .catch(function(error){
          alert("Ooops!!... connection error  or news not available");
          console.log(error);
         if (error) reject(error);
      });
    });
  },


   getLatestSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
          resolve(res.data.articles);
      })
      .catch(function(error){
          alert("Ooops!!... connection error or news not available");
          console.log(error);
         if (error) reject(error);
      });
    });
  },

  getPopularSource: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
          resolve(res.data.articles);
           console.log("pop");
      })
      .catch(function(error){
          alert("Ooops!!... connection error  or news not available");
          console.log(error);
         if (error) reject(error);
      });
    });
  },


}