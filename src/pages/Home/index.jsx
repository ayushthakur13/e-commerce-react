import { Navbar } from "../../components/Navbar"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { ProductCard } from "../../components/ProductCard"

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data);
        })()
    }, []);

    console.log(products);

    return (
        <>
        <Navbar />
        <main className="flex flex-wrap justify-center p-8 gap-6">
            {
                products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </main>
        </>
    )
}
