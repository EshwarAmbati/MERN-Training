import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import { useNavigate } from "react-router-dom";

const HomePage = ({ productInfoCards, categories, setSearchText }) => {
    const navigate = useNavigate();

    const openSearchPage = () => {
        navigate("/search");
    };

    const goToProductPage = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="homepage-root-container">
            <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
            <CategoryBar categories={categories} />
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
                <div className="products-cards-container">
                    {productInfoCards.map((elem) => {
                        return (
                            <div key={elem.id} onClick={() => goToProductPage(elem.id)}>
                                <ProductInfoCard data={elem} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
