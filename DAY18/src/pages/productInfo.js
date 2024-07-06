import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";

const ProductInfo = () => {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <CategoryBar />
            <h1>Product Info Page - ID: {id}</h1>
        </div>
    );
};

export default ProductInfo;
