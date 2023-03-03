type Article ={
    author: string | null;

category: string; 
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
    pagination:Pagination;
   data:[Article];
}

type Category = 
|"general"
|"business"
|"entertainment"
|"health"
|"science"
|"technology"
|"sports";