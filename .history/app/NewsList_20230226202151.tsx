import React from 'react'
import Article from './Article'

type Props = {
    news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
<main className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-18'>
    
</main>
  );
}

export default NewsList;