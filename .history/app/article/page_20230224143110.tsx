import { notFound } from "next/navigation";
import React from "react";
type Props ={
    searchParams?:Article;
};
function  ArticlePage({ searchParams }:Props)
{
if((searchParams && Object.entries(searchParams).length===0)||!searchParams){
    return notFound();
}
}
export default ArticlePage;