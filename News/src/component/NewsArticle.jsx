import React from 'react'

const NewsArticle = ({title,src,discription,url}) => {
  return (
    <div className="card bg-light text-dark mb-3 d-inline-block shadow-1 my-2 mx-2 px-2 py-2 col-md-2 col-sm-4 text-center" style={{maxWidth:"345px"}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text" >{discription ? discription : "some thing here"}</p>
    <a href={url}  target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsArticle
