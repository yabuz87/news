import React,{useState,useEffect} from 'react'
import data from "./fetchData";
import NewsArticle from './NewsArticle';
const NewsBoard = () => {
  const [aricles,setAritcle]=useState([]);
    useEffect(()=>{
        let url=`GET https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.myapi}`;
        fetch(url).then(response=>response.json()).then(data=> setAritcle(data.articles))
    },[]);

  data();
  return (
    <div>
      <h1 className="text-center">Latest<span className="badge bg-danger py-2 m-2">News</span></h1>
      {/* {
        aricles.map((item,index)=>{
          return(
            <NewsArticle key={index} title={item.title} src={item.urlToImage} discription={item.discription} url={item.url}/>
          );
        })
        } */}

    </div>)}

export default NewsBoard;
