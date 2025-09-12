import { useCart } from "../../context/cart-context";

export const HorizontalProductCard = ({ product }) => {
    const { cartDispatch } = useCart();

    const onCartRemoveClick = (id) => {
        cartDispatch({
            type: 'REMOVE_FROM_CART',
            payload: { id }
        })
    }

    return (
        <div className="flex w-full max-w-3xl bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-48 flex-shrink-0">
                <img
                    className="h-full w-full object-cover"
                    src={product.images}
                    alt={product.title}
                />
            </div>

            <div className="flex flex-col p-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

                <div className="mt-2">
                    <p className="text-gray-800 font-bold">
                        Rs. {product.price}
                        <span className="line-through text-gray-400 ml-2">Rs. 2499</span>
                        <span className="text-green-600 font-medium ml-2">(30% OFF)</span>
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                    <p className="text-gray-700 font-medium">Quantity:</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                        -
                        </button>
                        <span className="px-2">1</span>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                        +
                        </button>
                    </div>
                </div>

                <div className="flex gap-3 mt-4">
                    <button
                        onClick={() => onCartRemoveClick(product.id)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <span className="material-symbols-outlined">remove_shopping_cart</span>
                        Remove From Cart
                    </button>
                    <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="material-symbols-outlined text-3xl">favorite</span>
                        Move to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};
