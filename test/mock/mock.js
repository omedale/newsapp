const sources = [
      { "id": "abc-news-au", "name": "ABC News (AU)", "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.", "url": "http://www.abc.net.au/news", "category": "general", "language": "en", "country": "au", "urlsToLogos": { "small": "", "medium": "", "large": "" }, "sortBysAvailable": ["top"] },
      { "id": "al-jazeera-english", "name": "Al Jazeera English", "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.", "url": "http://www.aljazeera.com", "category": "general", "language": "en", "country": "us", "urlsToLogos": { "small": "", "medium": "", "large": "" }, "sortBysAvailable": ["top", "latest"] }];

const articles = [{ "author": "Khaled Tito Hamze", "title": "Crunch Report", "description": "Your daily roundup of the biggest TechCrunch stories and startup news.", "url": "https://techcrunch.com/video/crunchreport/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1", "publishedAt": "2017-05-24T20:00:38Z" },
{ "author": "John Mannes", "title": "Airbnb is running its own internal university to teach data science", "description": "Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..", "url": "https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1", "publishedAt": "2017-05-24T18:31:53Z" },
{ "author": "Frederic Lardinois", "title": "Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices", "description": "To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..", "url": "https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1", "publishedAt": "2017-05-24T16:39:32Z" },
{ "author": "John Biggs", "title": "Hackers are hiding malware in subtitle files", "description": "An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..", "url": "https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1", "publishedAt": "2017-05-24T16:09:15Z" },
{ "author": "Brian Heater", "title": "DJI’s tiny new Spark drone is $499 and kind of a big deal", "description": "The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..", "url": "https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1", "publishedAt": "2017-05-24T15:39:58Z" }];

const stringifyArticle = '[{ "author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"}]'

const JSONData = {
      "username": "Testing",
      "surName": "surName",
      "email": "test@test.com"
};

const singleNews = {
  "author": null,
  "title": "My First E3: Exploring the Show Floor - IGN Video",
  "description": "The bright lights, ground-shaking sound and bags of swag are a bit too much for our boy Rory.",
  "url": "http://ca.ign.com/videos/2017/06/15/my-first-e3-exploring-the-show-floor",
  "urlToImage": "http://assets1.ignimgs.com/thumbs/userUploaded/2017/6/15/showfloor-1497521314768_1280w.jpg",
  "publishedAt": "2017-06-15T11:00:00Z"}

const googleProfile = 
        { 'googleId': '116879242746092089539',
            'imageUrl': 'https://lh4.googleusercontent.com/-nw-tIm1T4bA/AAAAAAAAAAI/AAAAAAAACvY/_Z6GtHBYnkQ/s96-c/photo.jpg',
            'email': 'omedale@gmail.co',
            'name': 'Medale Oluwafemi',
            'givenName':'Medale',
            'familyName': 'Oluwafemi'}

const sortType = ['latest', 'latest'];
export default { sources,
  articles,
  sortType,
  stringifyArticle,
  JSONData,
  singleNews,
  googleProfile };

