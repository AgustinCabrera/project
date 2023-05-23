import Item from "../Item/Item"

export const ItemList = ({ products }) => {
  return (
      <div className="item-list">
        {products.map(prod => 
        <Item 
        id={prod.id} 
        name={prod.name} 
        price={prod.price}
        stock={prod.stock} 
        img={prod.img} 
        detail={prod.detail} 
        categoryId={prod.categoryId} 
        />)}
      </div>
  )
}
export default ItemList