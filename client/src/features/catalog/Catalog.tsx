import { useEffect, useState } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      //fetch is what we get from js. we will change it later on
      fetch('http://localhost:5000/api/Products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}