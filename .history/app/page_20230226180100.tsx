import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

async function Homepage() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)    
   
    return (
      <div>

    <div>Global News For You : <NewsList news={news}/></div>
    
   
  )
}

export default Homepage
