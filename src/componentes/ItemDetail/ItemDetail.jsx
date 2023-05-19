import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'
import { Link} from 'react-router-dom'
import { CartContext } from '../../assets/context/CartContext'


export const ItemDetail = ( props ) => {
    const [countAdded,setCountAdded] = useState(0)

    const {addItem} = useContext(CartContext) 
    
    const handleOnAdd = (count) =>{
        setCountAdded(count)
        
        //const item = {
        //    {props.id} {props.name}  {props.price}
        // }
        //addItem(item,count)
    }

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
        {
            countAdded > 0 ? (
                <Link to = '/cart' className ='option'>Finish buying</Link>
            ):(
                <ItemCount stock={props.stock} initial={1} onAdd={(count) => console.log('Products added: ',count)}/>
            )
        }
            <p className="card-text-stock">{props.stock} left in stock</p>
        </footer>
    </article>
        )
    }
