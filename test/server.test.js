
import React from 'react';
import {shallow } from 'enzyme';
import expect from 'expect';
import Login from '../src/common/Login';
import Header from '../src/common/Header.jsx';
import SearchBar from '../src/common/SearchBar.jsx';
import FavoriteNews from '../src/common/FavoriteNews.jsx';
import TopNews from '../src/common/TopNews.jsx';
import LatestNews from '../src/common/LatestNews.jsx';
import PopularNews from '../src/common/PopularNews.jsx';
import Headlines from '../src/common/Headlines.jsx';
import NewsComponent from '../src/common/NewsComponent.jsx';

require('./setup.js');

describe('Login Component Test :', () => {
  it('Login page will render Welcome to NewsApp ', () => {
    const welcome = shallow(<Login />);
    expect(welcome.find('h2').text()).toEqual('Welcome to NewsApp');
  });
});

describe('NewsComponent Component Test :', () => {
  const data = [
      { "id": "abc-news-au","name":"ABC News (AU)","description":"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.","url":"http://www.abc.net.au/news","category":"general","language":"en","country":"au","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
      { "id": "al-jazeera-english","name":"Al Jazeera English","description":"News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.","url":"http://www.aljazeera.com","category":"general","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
  ];

  it('should render Header', () => {
    const wrapper = shallow(<NewsComponent />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<NewsComponent />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<NewsComponent />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.source = []', () => {
    const wrapper = shallow(<NewsComponent />);
    expect(wrapper.state('sources')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<NewsComponent />);
    expect(wrapper.state('filterText')).toEqual('');
  });

  it('should render some news source', () => {
    const wrapper = shallow(<NewsComponent />);
    wrapper.setState({ sources: data });
    expect(wrapper.find('li')).toBeTruthy();
  });
});


describe('Favorite Component Test :', () => {
  const data = [{"author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"},{"author":"John Mannes","title":"Airbnb is running its own internal university to teach data science","description":"Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..","url":"https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1","publishedAt":"2017-05-24T18:31:53Z"},{"author":"Frederic Lardinois","title":"Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices","description":"To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..","url":"https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:39:32Z"},{"author":"John Biggs","title":"Hackers are hiding malware in subtitle files","description":"An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..","url":"https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:09:15Z"},{"author":"Brian Heater","title":"DJI’s tiny new Spark drone is $499 and kind of a big deal","description":"The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..","url":"https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T15:39:58Z"}];

  it('should render Header', () => {
    const wrapper = shallow(<FavoriteNews />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<FavoriteNews />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<FavoriteNews />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.favoritenews = []', () => {
    const wrapper = shallow(<FavoriteNews />);
    expect(wrapper.state('favoritenews')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<FavoriteNews />);
    expect(wrapper.state('filterText')).toEqual('');
  });

  it('should render some favorite articles', () => {
    const wrapper = shallow(<FavoriteNews />);
    wrapper.setState({ favoritenews: data });
    expect(wrapper.find('li')).toBeTruthy();
  });
});


describe('Headlines Component Test :', () => {
  const data = [{"author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"},{"author":"John Mannes","title":"Airbnb is running its own internal university to teach data science","description":"Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..","url":"https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1","publishedAt":"2017-05-24T18:31:53Z"},{"author":"Frederic Lardinois","title":"Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices","description":"To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..","url":"https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:39:32Z"},{"author":"John Biggs","title":"Hackers are hiding malware in subtitle files","description":"An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..","url":"https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:09:15Z"},{"author":"Brian Heater","title":"DJI’s tiny new Spark drone is $499 and kind of a big deal","description":"The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..","url":"https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T15:39:58Z"}];

  it('should render Header', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.headlines = []', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.state('headlines')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.state('filterText')).toEqual('');
  });
  it('should have initial state.myPath to be empty', () => {
    const wrapper = shallow(<Headlines />);
    expect(wrapper.state('myPath')).toEqual('');
  });

  it('should render some news headlines articles', () => {
    const wrapper = shallow(<Headlines />);
    wrapper.setState({ headlines: data });
    expect(wrapper.find('li')).toBeTruthy();
  });

});


describe('TopNews Component Test :', () => {
  const data = [{"author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"},{"author":"John Mannes","title":"Airbnb is running its own internal university to teach data science","description":"Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..","url":"https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1","publishedAt":"2017-05-24T18:31:53Z"},{"author":"Frederic Lardinois","title":"Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices","description":"To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..","url":"https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:39:32Z"},{"author":"John Biggs","title":"Hackers are hiding malware in subtitle files","description":"An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..","url":"https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:09:15Z"},{"author":"Brian Heater","title":"DJI’s tiny new Spark drone is $499 and kind of a big deal","description":"The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..","url":"https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T15:39:58Z"}];

  it('should render Header', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.topheadlines = []', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.state('topheadlines')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.state('filterText')).toEqual('');
  });
  it('should have initial state.myPath to be empty', () => {
    const wrapper = shallow(<TopNews />);
    expect(wrapper.state('myPath')).toEqual('');
  });

  it('should render some top news articles', () => {
    const wrapper = shallow(<TopNews />);
    wrapper.setState({ topheadlines: data });
    expect(wrapper.find('li')).toBeTruthy();
  });

});


describe('LatestNews Component Test :', () => {
  const data = [{"author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"},{"author":"John Mannes","title":"Airbnb is running its own internal university to teach data science","description":"Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..","url":"https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1","publishedAt":"2017-05-24T18:31:53Z"},{"author":"Frederic Lardinois","title":"Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices","description":"To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..","url":"https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:39:32Z"},{"author":"John Biggs","title":"Hackers are hiding malware in subtitle files","description":"An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..","url":"https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:09:15Z"},{"author":"Brian Heater","title":"DJI’s tiny new Spark drone is $499 and kind of a big deal","description":"The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..","url":"https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T15:39:58Z"}];

  it('should render Header', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.latestheadlines = []', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.state('latestheadlines')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.state('filterText')).toEqual('');
  });
  it('should have initial state.myPath to be empty', () => {
    const wrapper = shallow(<LatestNews />);
    expect(wrapper.state('myPath')).toEqual('');
  });

  it('should render some latest news articles', () => {
    const wrapper = shallow(<LatestNews />);
    wrapper.setState({ latestheadlines: data });
    expect(wrapper.find('li')).toBeTruthy();
  });

});


describe('PopularNews Component Test :', () => {
  const data = [{"author":"Khaled Tito Hamze","title":"Crunch Report","description":"Your daily roundup of the biggest TechCrunch stories and startup news.","url":"https://techcrunch.com/video/crunchreport/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1","publishedAt":"2017-05-24T20:00:38Z"},{"author":"John Mannes","title":"Airbnb is running its own internal university to teach data science","description":"Tech companies, and increasingly even non-tech companies, are struggling with the fact that there are not enough trained data scientists to fill market..","url":"https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/1t289s48jpq9siw41dr_pkw.png?w=720&h=400&crop=1","publishedAt":"2017-05-24T18:31:53Z"},{"author":"Frederic Lardinois","title":"Google, IBM and Lyft launch Istio, an open-source platform for managing and securing microservices","description":"To help developers and DevOps professionals manage and secure their microservice-based applications, Google, IBM and Lyft today announced Istio, a new open..","url":"https://techcrunch.com/2017/05/24/google-ibm-and-lyft-launch-istio-an-open-source-platform-for-managing-and-securing-microservices/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-577155765.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:39:32Z"},{"author":"John Biggs","title":"Hackers are hiding malware in subtitle files","description":"An impressive new exploit gives hackers the ability to control your desktop through malware spread by fake movie subtitles. The exploit, which essentially..","url":"https://techcrunch.com/2017/05/24/hackers-are-hiding-malware-in-subtitle-files/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/hacking-intensifies.png?w=764&h=400&crop=1","publishedAt":"2017-05-24T16:09:15Z"},{"author":"Brian Heater","title":"DJI’s tiny new Spark drone is $499 and kind of a big deal","description":"The big news at DJI’s “huge Seize the Moment\" event in New York City is, as expected, pretty small. The world’s largest consumer drone maker cracked..","url":"https://techcrunch.com/2017/05/24/heres-djis-tiny-new-spark-drone/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/05/cma_3648.jpg?w=764&h=400&crop=1","publishedAt":"2017-05-24T15:39:58Z"}];

  it('should render Header', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).toEqual(true);
  });
  it('should render Search bar', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
    ])).toEqual(true);
  });

  it('should have state.authenticated = false', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.state('authenticated')).toEqual(false);
  });

  it('should have initial state.popularheadlines = []', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.state('popularheadlines')).toEqual([]);
  });

  it('should have initial state.filterText to be empty', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.state('filterText')).toEqual('');
  });
  it('should have initial state.myPath to be empty', () => {
    const wrapper = shallow(<PopularNews />);
    expect(wrapper.state('myPath')).toEqual('');
  });

  it('should render some Popular news articles', () => {
    const wrapper = shallow(<PopularNews />);
    wrapper.setState({ popularheadlines: data });
    expect(wrapper.find('li')).toBeTruthy();
  });

});






