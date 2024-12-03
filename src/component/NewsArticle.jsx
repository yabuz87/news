import React from 'react'
import image from "../assets/news.jpg"


const NewsArticle = ({title,src,discription,url}) => {
  return (
  <>
    <div className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 p-1 col-sm-5 col-md-3" style={{maxWidth:"345px"}}>
  <img src={src ? src : image } className="card-img-top img-fluid" style={{height:"200px",width:"360px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text" >{discription ? discription.slice(0,90) : "News is a report of a current even. it is information about something that has just happened."}</p>
    <a href={url}  target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>

</>
  )
}

export default NewsArticle
