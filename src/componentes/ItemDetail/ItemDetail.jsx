import React from 'react'
import {ItemCount} from '../itemCount/itemCount'
import './ItemDetail.css'

export const ItemDetail = ( props ) => {

    const {id, name, price, stock, img, detail,categoryID} = props
    
        return (
    <article className="card">
            <header className="card-header">
                <img src={props.img} alt={props.name} className="ItemImg"/>
            </header>
            <section className="card-body">
                <p className="card-name">{props.name}</p>
                <p className="card-text">${props.price}</p>
                <p className="card-text">{props.detail}</p>    
            </section>       
        <footer className="card-footer">
            <ItemCount stock={props.stock} initial={1} onAdd={(count) => console.log('Products added: ',count)}/>
            <p className="card-text-stock">{stock} left in stock</p>
        </footer>
    </article>
        )
    }
