
import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
    ) => {
    //graphql query
    const query = gql`
         query myQuery( $categories: String!, $keywords: String){
    myQuery(access_key: "6482546318d832502fb4c2000673fbe5", categories: $categories, countries: "us" sort:"publis keywords: $keywords){
  
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
   const res = await fetch("https://parobe.stepzen.net/api/singing-butterfly/__graphql",{
    method:'POST',
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? {revalidate: 0} : {revalidate: 60},
    headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN}`,
    },
    
        body: JSON.stringify({
            query,
            variables: {
                 access_key: process.env.API_KEY,
                 categories: category,
                 keyword: keywords,
            },
        }),
       }
   );
   console.log(category,keywords);
  
   const newsResponse = await res.json();
   const news = sortNewsByImage(newsResponse.data.myQuery);
   return news; 
};
export default fetchNews; 

