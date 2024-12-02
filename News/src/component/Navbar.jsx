import React from 'react'

const Navbar = ({setCategory,category}) => {
    const categoryHandler=(e)=>
    {
        setCategory(e.target.innerText);
    }

  return ( 

    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" onClick={()=>setCategory("general")}><span className="badge bg-light text-dark p-2">Purity First News</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Category
            </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>science</div></li>
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>business</div></li>
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>health</div></li>
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>entertainment</div></li>
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>technology</div></li>
            <li><div className="dropdown-item" onClick={(e) => categoryHandler(e)}>sports</div></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{category.toUpperCase()}</a>
          </li>
        </ul>
        
       </div>
     </div>
   </nav>
  )}

export default Navbar


 
{/*  */}