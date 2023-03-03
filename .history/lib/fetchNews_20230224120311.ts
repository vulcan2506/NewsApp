
import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
    ) => {
    //graphql query
    const query = gql`
         query myQuery (
            $access_key:String
            $categories:String
            $keywords:String
         ) {
         myQuery(
            access_key: $access_key
            categories: $categories
            countries: "gb"
            sort: "published_desc"
            keywords: $keywords
         ) {
         data {
           author
           category
           country
           description
           image
           language
           published_at
           source
           title
           url
         }
         pagination {
           count
           limit
           offset
           total
         }
      }
   }
   `;
   const res = await fetch('https://parobe.stepzen.net/api/singing-butterfly/__graphql',{
    method:'POST',
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ?{revalidate:0}:{revalidate:20},
    headers: {
        "Content-Type": "application/json",
        Authorization:`Apikey ${process.env.STEPZEN}`
    },
    
        body: JSON.stringify({
            query,
            variables:{
                 access_key: process.env.API_KEY,
                 categories: category,
                 keyword:keywords,
            },
        }),
    
   })
   const newsResponse = await res.json();
   //const news = sortNewsByImage(newsResponse.data.myQuery)
   return newsResponse;
};
export default fetchNews; 

