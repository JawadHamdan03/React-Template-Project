/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import Product from "./Product";
const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) throw new Error("failed to get products");
                const data = await res.json();
                console.log(data.products)
                setProducts(data.products);
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        getProducts();
    }, []);


    const renderProducts = (
        <div className="flex flex-wrap gap-4 ml-20">
            {products.map(p => (
                <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    category={p.category}
                    price={p.price}
                />
            ))}
        </div>
    )

    return (<>
        {loading && <p>Loading ...</p>}
        {error && <p>{error}</p>}

        {renderProducts}


    </>);
}

export default Products;