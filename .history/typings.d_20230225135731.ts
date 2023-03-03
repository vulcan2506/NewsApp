type Article ={
    author: String | null;

category: String; 
country: string; 
image: string | null; source: string; title: string;

description: string;

Language: string; published_at: string;

url: string;

}
type Pagination = {
    ount: Int;

    Limit: Int;
    
    offset: Int; total: Int;
}
type NewsResponse = {
    data:Article[];
    pagination:Pagination;
  
}

type Category = 
|"business"
|"entertainment"
