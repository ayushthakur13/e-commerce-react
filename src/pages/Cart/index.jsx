import { Navbar } from "../../components/Navbar"
import { HorizontalProductCard } from "../../components/HorizontalProductCard"
import { PriceDetails } from "../../components/PriceDetails";
import { useCart } from "../../context/cart-context";

export const Cart = () => {

    const { cart } = useCart();

    return (
        <>
        <Navbar />
        <main className="flex flex-col items-center pt-6">
            <h1 className="text-4xl font-bold text-gray-700">My Cart</h1>
            {
                cart?.length > 0 ? (
                    <div className="flex gap-8 p-8">
                        <div className="flex flex-col gap-4">
                            {
                                cart.map(product => <HorizontalProductCard key={product.id} product={product} />)
                            }
                        </div>
                        <div>
                            <PriceDetails />
                        </div>
                    </div>
                ) 
                : <p className="text-gray-500 mt-6">Cart is empty</p>
            }
        </main>
        </>
    )
}
