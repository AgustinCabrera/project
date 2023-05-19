import { createContext } from "react";

export const ProductAddedContext = createContext();

export const ProcuctAddedProvider = (props) => {
    const [addedToCart, setAddedToCart] = useState([]);
    return(
        <ProductAddedContext.Provider value={[addedToCart,setAddedToCart]}>
            {props.children}
        </ProductAddedContext.Provider>
    );
}