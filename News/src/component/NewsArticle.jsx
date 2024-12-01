import React from 'react'

const NewsArticle = ({title,src,discription,url}) => {
  return (
    <div className="card bg-light text-dark mb-3 d-inline-block shadow-1 my-2 mx-2 col-md-2 col-sm-4 text-center" style={{ maxWidth: "345px" }}>
    <img src={src || 'path-to-placeholder-image.jpg'} className="card-img-top mb-3" alt={title || "Image not available"} />
    <div className="card-body">
      <h5 className="card-title mb-3">{title.slice(0,50)}</h5>
      <p className="card-text mb-3">{discription ? discription.slice(0,90): "Description not available"}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3">Read More</a>
    </div>
  </div>
  
  )
}

export default NewsArticle
