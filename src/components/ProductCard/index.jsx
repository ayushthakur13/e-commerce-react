import { useCart } from "../../context/cart-context";
import { findProductsInCart } from "../../utils/findProductsInCart"
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {

    const { cart, cartDispatch } = useCart();
    const isProductInCart = findProductsInCart(cart, product.id);
    const navigate = useNavigate();

    const onCartClick = (product) => {
        !isProductInCart
        ? cartDispatch({
            type: 'ADD_TO_CART',
            payload: { product }
        })
        : navigate('/cart')
    };

    return (
        <div className="w-80 bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">

            <div className="relative">
                <img
                
                className="h-64 w-full object-cover"
                src={product.images}
                alt="product-image"
                />
                <button className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 hover:cursor-pointer">
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                </button>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
                </h3>

                <div className="mt-2">
                    <p className="text-gray-800 font-bold">
                        Rs. {product.price}{" "}
                        <span className="line-through text-gray-400 ml-2">Rs. 2499</span>
                        <span className="text-green-600 font-medium ml-2">(30% OFF)</span>
                    </p>
                </div>

                <button onClick={() => onCartClick(product)} className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">
                        {
                            isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                        }
                    </span>
                    {
                        isProductInCart ? 'Go To Cart' : 'Add To Cart'
                    }
                </button>
            </div>
        </div>
    );
};
