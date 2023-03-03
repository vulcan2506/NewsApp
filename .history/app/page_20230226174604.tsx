import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

async function Homepage() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)    
   
    return (
      <div>

    <div>Global News For You : <NewsList news={news}/></div></div>
   
  )
}

export default Homepage
