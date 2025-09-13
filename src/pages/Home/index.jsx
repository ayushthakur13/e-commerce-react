import { Navbar } from "../../components/Navbar"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { ProductCard } from "../../components/ProductCard"
import { getAllCategories } from "../../api/getAllCategories"
import { getProductsByCategory } from "../../utils/getProductsByCategory"

export const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            const categories = await getAllCategories();
            const updatedCategories = [...categories, {id: 'a', name: 'All'}]

            setProducts(products);
            setCategories(updatedCategories);
        })()
    }, []);

    console.log('Products: ', products);
    console.log('Categories: ', categories);

    const onCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    const productsFilterByCategories = getProductsByCategory(products, selectedCategory);

    return (
        <>
        <Navbar />
        <main className="">
            <div className="flex flex-wrap justify-center p-8 gap-6">
                {
                    categories?.length > 0 && categories.map(category => <div onClick={() => onCategoryClick(category.name)} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-800 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">{category.name}</div>)
                }
            </div>
            <div className="flex flex-wrap justify-center p-4 gap-6">
                {
                    productsFilterByCategories?.length > 0 
                        ? productsFilterByCategories.map(product => <ProductCard key={product.id} product={product} />)
                        : <p>No product found</p>
                }
            </div>
        </main>
        </>
    )
}
