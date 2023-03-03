import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import UsersPost from './UsersPost';
async function page() {
   
   
    return (
    <div> 
      <UsersPost/>
    <div>Global News For You : </div>
   </div>
  )
}

export default page
