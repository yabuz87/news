import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import Footer from './footer/Footer';

const NewsBoard = ({ category, language }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'dd8e0d11dff34c5aba5d5d5ec5d3e0de';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&${language}&apiKey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    setLoading(true); // Move this line here
    fetchData();
  }, [category, language]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div id="contain">
        <h1 className="text-center">Latest<span className="badge bg-danger py-2 m-2">News</span></h1>
        <div className="container-fluid d-flex row text-center align-items-top justify-content-center">
          {
            loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              articles.map((item, index) => (
                <NewsArticle key={index} title={item.title} src={item.urlToImage} description={item.description} url={item.url} />
              ))
            )
          }
        </div>
       <div className={`${loading ?  'd-none': 'd-block'}`}>
       <Footer/>
       </div>
      </div>
    </>
  );
};

export default NewsBoard;
