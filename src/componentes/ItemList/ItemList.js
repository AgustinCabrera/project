import Item from './item/item'

export const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}
export default ItemList