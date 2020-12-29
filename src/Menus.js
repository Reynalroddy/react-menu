import React from 'react'
import Menu from './Menu';
const Menus = ({data}) => {
    return (
        <div className="row py-5">
            
            {
data.map((item)=>{
return <Menu item = {item} key = {item.id}>
</Menu>

})


            }


        </div>
    )
}

export default Menus
