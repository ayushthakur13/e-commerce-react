import { useCart } from "../../context/cart-context";
import { getTotalCartPrice } from '../../utils/getTotalCartPrice'

export const PriceDetails = () => {

    const { cart } = useCart();
    console.log('Cart: ',cart);

    const totalCartPrice = getTotalCartPrice(cart);
    const deliveryCharge = 10;

    return (
        <div className="w-[20rem] max-w-sm bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                Price Details
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                    <p>Price ({cart.length} items)</p>
                    <p>Rs. {totalCartPrice}</p>
                </div>
                <div className="flex justify-between">
                    <p>Delivery Charge</p>
                    <p>Rs. {deliveryCharge}</p>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 border-t pt-3">
                    <p>Total Amount</p>
                    <p className="text-green-600">Rs. {totalCartPrice + deliveryCharge}</p>
                </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Place Order
            </button>
        </div>
    );
};
