"use client";
import { useRouter } from 'next/navigation';
import react from 'react';
type Props ={
    article:Article;
};

function Readmore({article}:Props){
const router = useRouter();
const handleClick = () => {
    const queryString = Object.entries(article).map(([key, value]) =>`${key}=${value}`)
    .join('&');
    const url = `/article?${queryString}`;
    router.push(url);
}
return(
<button
onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg hover:bg-orange-600">
Read More
</button>
);
}
export default Readmore;