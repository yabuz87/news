import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=dd8e0d11dff34c5aba5d5d5ec5d3e0de`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
       { articles.map((news,index)=>{
        return <NewsArticle key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
       });}  
  },[]);

  return (
    <div>
      <h1 className="text-center">Latest<span className="badge bg-danger py-2 m-2">News</span></h1>
      {
        articles.map((item, index) => {
          return (
            <NewsArticle key={index} title={item.title} src={item.urlToImage} description={item.description} url={item.url} />
          );
        })
      }
    </div>
  );
};

export default NewsBoard;
