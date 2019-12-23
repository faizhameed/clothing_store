import React from 'react'
import "./menu-items.component.scss"
import {withRouter} from 'react-router-dom';
const MenuItem = ({title,imageUrl,size,history,linkUrl,match})=>(
    
    <div onClick ={()=>history.push(`${match.url}${linkUrl}`)}
    className ={`menu-item ${size}`}>
        <div className="background-image" style = {{
        backgroundImage:`url(${imageUrl})`
    }}>

    </div>
    <div className = 'content'>
        <h1 className = "title">{title.toUpperCase()}</h1>
        <span className = "subtitle">SHOP NOW</span>
    </div>
</div>
)
export default withRouter(MenuItem);