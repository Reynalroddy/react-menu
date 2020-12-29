import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menus from './Menus';

let allCategories = new Set(items.map((item)=>item.category));
allCategories = ["all",...allCategories]
console.log(allCategories);

function App() {
  const [data,setData] = useState(items);
  const [categories,setCategories] = useState(allCategories);
  const filterItems = (category)=>{
  if(category === "all"){setData(items)
  return
  }
const newItems = items.filter((item)=>item.category === category)
setData(newItems);
}

  return <main>
<section>
  <div className="container">
<Categories categories = {categories} filterItems = {filterItems}></Categories>
<Menus data = {data}></Menus>
    </div>
 
</section>




  </main>
  

}

export default App;
