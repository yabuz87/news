import React from 'react'

const NewsArticle = ({title,src,discription,url,}) => {
  return (
    <div className="card" style="width: 18rem;">
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription ? discription : "some thing here"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsArticle
