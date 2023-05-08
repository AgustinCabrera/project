import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ( props ) => {

return (
    <article className="card">
            <header className="card-header">
                <img src={props.img} alt={props.name} className="ItemImg"/>
            </header>
            <section className="card-body">
                <p className="card-text">{props.name}</p>
                <p className="card-text">${props.price}</p>
                <p className="card-text">{props.detail}</p>    
            </section>       
        <footer className="card-footer">
            <ItemCount stock={props.stock} initial={1} onAdd={(count) => console.log('Products added: ',count)}/>
            <p className="card-text-stock">{props.stock} left in stock</p>
        </footer>
    </article>
        )
    }
