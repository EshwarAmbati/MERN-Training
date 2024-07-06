import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ categories, searchText, setSearchText }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    const goToProductPage = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar categories={categories} />
            <div>
                {products.map((elem) => {
                    return (
                        <p key={elem.id} onClick={() => goToProductPage(elem.id)}>
                            {elem.title}
                        </p>
                    );
                })}
            </div>
        </>
    );
};

export default SearchPage;
