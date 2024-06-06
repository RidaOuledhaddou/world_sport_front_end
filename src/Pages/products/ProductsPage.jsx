import Banner from "./Banner";
import Navbar from '../../Components/common/Navbar';
import Footer from '../../Components/common/Footer';
import Content from "./Content";
import { useQuery } from "@tanstack/react-query";
import fetchProductById from "./fetchProducts";
import { useParams } from "react-router-dom";

export default function Products() {
    const { category } = useParams();
    const x = category ? category : "top-sellers";
    const results = useQuery(["details", x], fetchProductById);
    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const products = results.data;
    return (
        <>
            <Navbar />
            <main>
                <Banner />
                {products.length === 0 ? (
                    <h1 className="mt-4 t-center">No Products Found</h1>
                ) : (
                    <Content products={products} />
                )}
            </main>
            <Footer />
        </>
    );
}
