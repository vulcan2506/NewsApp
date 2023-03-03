import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import UsersPost from './UsersPost';
async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)    
    const{ posts }= useContext(NewsContext)
    console.log(posts)
    return (
    <div> 
      {posts.map(post)}
      <UsersPost/>
      
     
    <div>Global News For You : <NewsList news={news}/></div>
   </div>
  )
}

export default page
