import React from 'react'
import "./menu-items.component.scss"
const MenuItem = ({title,imageUrl,size})=>(
    <div style = {{
        backgroundImage:`url(${imageUrl})`
    }}
    className ={`menu-item ${size}`}>
    <div className = 'title'>
        <h1 className = "title">{title}</h1>
        <span className = "subtitle">SHOP NOW</span>
    </div>
</div>
)
export default MenuItem;