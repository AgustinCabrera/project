import { useContext } from "react";
import { CartContext } from "../../../assets/context/CartContext";

export const Item = () => {
    const [cart, setCart] = useContext(CartContext);

	const deleteItem = () => {
		setCart(cart.filter((prod) => prod.id !== id));
	};

	return (
		<>
			<div className='ItemCart'>
				<img
					className='ItemCartImg'
					src={img}
					alt='product to buy'
				/>
			</div>
			<div className='ItemCartContainerInfo'>
				<p className='ItemCartContainerTitle'>{title}</p>
				<p className='ItemCartContainerQuantity'>
					Quantity : {quantity}
				</p>
				<p className='ItemCartContainerPrice'>
					Price : $ {price}
				</p>
			</div>
			<div className='ItemCartContainerDelete'>
				<i
					className='fas fa-trash DeleteIcon'
					onClick={deleteItem}
				></i>
			</div>
		</>
	);
}
