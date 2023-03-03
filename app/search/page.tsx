import React from 'react'
import fetchNews from '../../lib/fetchNews'
import NewsList from '../NewsList'
type Props = {
  searchParams?:{term: string}
};
async function search({searchParams}:Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  )
  return (
    <div>
    <h1>{searchParams?.term}</h1>
    <NewsList news={news}/>
    </div>
  )
}

export default search