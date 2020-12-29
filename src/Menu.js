import React from 'react';

const Menu = ({item}) => {

  const {title,category,id,price,img,desc} = item;
  return <div className="col-10 mx-auto col-md-4">
<div className="row">
  <div className="col-5">
<img src={img} alt ={title} className="img-fluid"></img>
  <p className ="">${price}</p>
  </div>

  <div className="col-7">
    <div className="infos">
      <h5>{title}</h5>
    </div>
    <p>{desc}</p>
  </div>
</div>




  </div>
    

};

export default Menu;
