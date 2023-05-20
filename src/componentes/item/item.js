import { Link } from "react-router-dom"
import React from 'react'

import './Item.css'

const Item = ({id, name, price ,img,detail}) => {
    return (
        <article className="card">
            <header className="card-header">
                <h2 className="card-title">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="card-body">
                <p className="card-text">${price}</p>
                <p className="card-text">{detail}</p>   
            </section>
            <footer className="card-footer">
                <Link to = {`/item/${id}`} className="card-link">View Item</Link>
            </footer>
        </article>
    )
}
export default Item;
